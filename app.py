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

options = {
    "ang" : 0,
    "cry" : 0,
    "sad" : 0,
    "smi" : 0,
    "str" : 0,
    "smo" : 0,
    "tir" : 0,
    "wor" : 0
}

def angry():
    global options
    options["ang"] += 1

def crying():
    global options
    options["cry"] += 1

def sadness():
    global options
    options["sad"] += 1

def smiling():
    global options
    options["smi"] += 1

def stress():
    global options
    options["str"] += 1

def smoking():
    global options
    options["smo"] += 1

def tired():
    global options
    options["tir"] += 1

def workout():
    global options
    options["wor"] += 1

def unknown():
    pass

def switch(val):

    if val == 'angry' : angry()
    if val == 'crying' : crying()
    if val == 'sadness' : sadness()
    if val == 'smiling' : smiling()
    if val == 'stress' : stress()
    if val == 'smoking' : smoking()
    if val == 'tired' : tired()
    if val == 'workout' : workout()

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
        if i['tag']=='goodbye': 
            conclusion = max(options, key= lambda x: options[x])
            if conclusion == "ang":
                return("You might be interested in knowing about CBT, or cognitive behavioral therapy.\n\nThere are certain cognitive distortions including irrational patterns of thinking. Here are a few:\nAll-or-Nothing thinking: ")
            if conclusion == "crying":
                return("You might be interested in knowing about CBT, or cognitive behavioral therapy.\n\nThere are certain cognitive distortions including irrational patterns of thinking. Here are a few:\nAll-or-Nothing thinking: ")
            if conclusion == "sad":
                return("You might be interested in knowing about CBT, or cognitive behavioral therapy.\n\nThere are certain cognitive distortions including irrational patterns of thinking. Here are a few:\nAll-or-Nothing thinking: ")
            if conclusion == "smi":
                return("You might be interested in knowing about CBT, or cognitive behavioral therapy.\n\nThere are certain cognitive distortions including irrational patterns of thinking. Here are a few:\nAll-or-Nothing thinking: ")
            if conclusion == "str":
                return("You might be interested in knowing about CBT, or cognitive behavioral therapy.\n\nThere are certain cognitive distortions including irrational patterns of thinking. Here are a few:\nAll-or-Nothing thinking: ")
            if conclusion == "smo":
                return("You might be interested in knowing about CBT, or cognitive behavioral therapy.\n\nThere are certain cognitive distortions including irrational patterns of thinking. Here are a few:\nAll-or-Nothing thinking: ")
            if conclusion == "tir":
                return("You might be interested in knowing about CBT, or cognitive behavioral therapy.\n\nThere are certain cognitive distortions including irrational patterns of thinking. Here are a few:\nAll-or-Nothing thinking: ")
            if conclusion == "wor":
                return("You might be interested in knowing about CBT, or cognitive behavioral therapy.\n\nThere are certain cognitive distortions including irrational patterns of thinking. Here are a few:\nAll-or-Nothing thinking: ")
        if i['tag']==category:
            switch(i['tag'])
            return(np.random.choice(i['responses']))   

if __name__ == "__main__":
    app.run(host="localhost", port=8000, debug=True)