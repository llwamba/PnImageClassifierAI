# Pneumonia Image Classifier App

## Overview
This Flask application is designed to serve as an interface for predicting pneumonia in chest X-ray images using deep learning models. It utilizes a pre-trained VGG16 model to classify X-ray images into two categories: "Normal" and "Pneumonia." The application is integrated with a web interface, allowing users to upload X-ray images for real-time predictions.

## Features
1. **Homepage**: The app provides a simple web interface with a homepage (/) that displays an HTML form for uploading chest X-ray images.
2. **Prediction Endpoint**: Upon submitting an X-ray image through the form, the app processes the image, preprocesses it, and passes it through the VGG16 model for prediction. The prediction is returned in JSON format, including the prediction value, prediction percentage, and the label ("PNEUMONIA" or "NORMAL").

## How to Use

1. **Homepage**: Access the homepage of the application by navigating to the root URL (**/**) in your web browser.
2. **Upload Image**: Use the provided form to upload a chest X-ray image in JPEG or PNG format.
3. **Get Prediction**: Submit the uploaded image, and the app will respond with a prediction regarding whether the image represents a case of pneumonia or not, along with the probability of pneumonia.



## VGG16 Model Details
This Flask app complements the ["Pneumonia Detection CNN"](https://github.com/llwamba/pneumonia_detection_cnn) repository, where I trained and evaluated the VGG16 model on chest X-ray images.

Here are some key details:
1. **Accuracy**: The VGG16 model achieved an accuracy of 96% on the test dataset.
2. **AUC (Area Under the ROC Curve)**: The AUC score for this model is 0.99, indicating excellent performance in distinguishing between normal and pneumonia cases.
3. **Precision** and **Recall**: The model demonstrated strong precision and recall scores, further highlighting its effectiveness.

The model can be saved and loaded for future use, making it suitable for integration into applications for pneumonia detection.
