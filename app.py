import os
import numpy as np
from flask import Flask, request, render_template, jsonify
from werkzeug.utils import secure_filename
from tensorflow.keras.preprocessing import image
from tensorflow.keras.models import load_model
import io

app = Flask(__name__)
model = load_model('model_VGG.h5')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    # Get the file from the request
    file = request.files['file']

    # Sanitize the filename
    filename = secure_filename(request.files['file'].filename)
    
    # Load the image and preprocess it
    img = image.load_img(io.BytesIO(file.read()), target_size=(224, 224, 3))
    img = image.img_to_array(img)
    img = img * (1./255)
    img = np.expand_dims(img, axis=0)
   
    
    # Make a prediction
    preds = model.predict(img)
    
    # Return the prediction as JSON
    result = {'prediction': float(preds[0]), 'prediction_percent': float(preds[0]*100), 'label': 'PNEUMONIA' if preds[0] >= 0.5 else 'NORMAL'}
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)