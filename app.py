#imports
from flask import Flask, render_template, request
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer
import spacy.cli 

import json 
import numpy as np 
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Embedding, GlobalAveragePooling1D
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
from sklearn.preprocessing import LabelEncoder
import pickle
from imageai.Classification.Custom import ClassificationModelTrainer

import train
from train import *

app = Flask(__name__, template_folder='templates')

#define app routes
@app.route("/")
def index():
    return render_template("index.html")

@app.route("/get")
#function for the bot response
def get_bot_response():
    userText = request.args.get('msg')
    # return str(englishBot.get_response(userText))
    result = model.predict(pad_sequences(tokenizer.texts_to_sequences([userText]), truncating='post', maxlen=max_len))
    category = lbl_encoder.inverse_transform([np.argmax(result)]) # labels[np.argmax(result)]
    for i in data['intents']:
        if i['tag']==category:
            return(np.random.choice(i['responses']))


if __name__ == "__main__":
    app.run(host="localhost", port=8000, debug=True)
    
#PythonApplicattion17
# def look():
#     print("Looking at your wonderful piece! Give me a second...")
# 
# look()