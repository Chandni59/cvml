import cv2
import numpy as np
import base64

class AttentionDetector:
    def __init__(self):
        # Using simple Haar cascade for MVP
        self.face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')


    def process_frame(self, base64_img: str):
        # Decode the base64 string to an OpenCV image
        if ',' in base64_img:
            base64_img = base64_img.split(',')[1]
            
        img_data = base64.b64decode(base64_img)
        np_arr = np.frombuffer(img_data, np.uint8)
        img = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)
        
        if img is None:
            return {"error": "Invalid image format"}

        # Convert the BGR image to grayscale
        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        
        # Detect faces
        faces = self.face_cascade.detectMultiScale(gray, 1.1, 4)
        
        status = "Distracted"
        score = 0
        
        if len(faces) > 0:
            status = "Attentive"
            score = 100
        else:
            status = "No Face Detected"
            score = 0
            
        return {
            "status": status,
            "attention_score": score
        }
