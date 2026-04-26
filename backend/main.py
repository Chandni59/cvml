from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from ai.detector import AttentionDetector
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

detector = AttentionDetector()

@app.get("/")
def read_root():
    return {"message": "Welcome to Student Attention Monitor API"}

@app.websocket("/ws/session")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    try:
        while True:
            data = await websocket.receive_text()
            try:
                message = json.loads(data)
                if "image" in message:
                    base64_img = message["image"]
                    result = detector.process_frame(base64_img)
                    await websocket.send_json(result)
            except json.JSONDecodeError:
                pass
    except WebSocketDisconnect:
        print("Client disconnected")
    except Exception as e:
        print(f"Error: {e}")
