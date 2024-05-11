from flask import Blueprint, request, jsonify
from PIL import Image
from IPython.display import Markdown

import google.generativeai as genai
import os
import json

generate_script_bp = Blueprint('post_image', __name__)

UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def to_markdown(text):
  text = text.replace('•', '  *')
  return Markdown(text.indent(text, '> ', predicate=lambda _: True))

@generate_script_bp.route('/generate-script', methods=['POST'])
def generateScript():

    theme = request.form.get('theme')
    style = request.form.get('style')
    reutilize = request.form.get('reutilize')
    details = request.form.get('details')
    duration = request.form.get('duration')

    API_KEY = "AIzaSyB_5rTOmzKOkh6YvhOWjU06OzLt32aBMvE"

    genai.configure(api_key=API_KEY)

    generation_config = {
        "temperature": float(style),
        "max_output_tokens": 500
    }

    model = genai.GenerativeModel(
        model_name='gemini-1.0-pro',
        generation_config=generation_config,
    )

    safety_settings = [
        {
            "category": "HARM_CATEGORY_HARASSMENT",
            "threshold": "BLOCK_MEDIUM_AND_ABOVE"
        },
        {
            "category": "HARM_CATEGORY_HATE_SPEECH",
            "threshold": "BLOCK_MEDIUM_AND_ABOVE"
        },
        {
            "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            "threshold": "BLOCK_MEDIUM_AND_ABOVE"
        },
        {
            "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
            "threshold": "BLOCK_MEDIUM_AND_ABOVE"
        },
    ]

    prompt = "aja como um roteirista profissional. Escreva o texto para um vídeo com duração " + str(duration) + " minutos considerando como parâmetros: theme: " + theme
    if (reutilize != 'undefined'):
        prompt += "; com base na estrutura do texto: " + reutilize
    if (details != 'undefined'):
        prompt += "; details adicionais: " + details

    response = model.generate_content(prompt)
    response.resolve()

    resultText = response.text.split('\n\n')

    return jsonify(resultText), 200

