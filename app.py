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
responses = 0

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
    global responses
    userText = request.args.get('msg')
    result = model.predict(pad_sequences(tokenizer.texts_to_sequences([userText]), truncating='post', maxlen=max_len))
    category = lbl_encoder.inverse_transform([np.argmax(result)]) # labels[np.argmax(result)]
    for i in data['intents']:
        if i['tag']=='goodbye' or 'done' in userText or 'finished' in userText:
            responses = 2 
            conclusion = max(options, key= lambda x: options[x])
            if conclusion == "ang":
                return("I've noticed a pattern of anger in your collage! You might be interested in knowing about CBT, or cognitive behavioral therapy. CBT is a solution oriented form of therapy that teaches how to identify negative feelings, do a reality-check, then challenge and replace them with more rational thoughts.\nExcessive anger can take a toll on your mental health, physical health, relationships, and career. If you feel overwhelmed by anger, don’t hesitate to reach out and get help. CBT for anger management is structured, directive and can teach you coping strategies to manage triggers in an adaptive way. Remember, anger should not be suppressed. Rather, it should be communicated in an assertive, healthy way.")
            if conclusion == "crying":
                return("You might be interested in knowing about CBT, or cognitive behavioral therapy.\nThere are certain cognitive distortions including irrational patterns of thinking. Here are a few:\nAll-or-Nothing thinking: ")
            if conclusion == "sad":
                return("If you are feeling sadness or stress as of recent: a reminder that talking with a loved one, taking proper nutrition, physical exercise, breathing exercises, or listening to positive music are some ways to see at least some glimmers of living.\nIf it gets worse, please contact a qualified local therapist that can help you develop effective coping skills for sadness and other emotions.")
            if conclusion == "smi":
                return("You might be interested in knowing about CBT, or cognitive behavioral therapy.\nThere are certain cognitive distortions including irrational patterns of thinking. Here are a few:\nAll-or-Nothing thinking: ")
            if conclusion == "str":
                return("You might be interested in knowing about CBT, or cognitive behavioral therapy.\nThere are certain cognitive distortions including irrational patterns of thinking. Here are a few:\nAll-or-Nothing thinking: ")
            if conclusion == "smo":
                return("You might be interested in knowing about CBT, or cognitive behavioral therapy.\nThere are certain cognitive distortions including irrational patterns of thinking. Here are a few:\nAll-or-Nothing thinking: ")
            if conclusion == "tir":
                return("You might be interested in knowing about CBT, or cognitive behavioral therapy.\nThere are certain cognitive distortions including irrational patterns of thinking. Here are a few:\nAll-or-Nothing thinking: ")
            if conclusion == "wor":
                return("You might be interested in knowing about CBT, or cognitive behavioral therapy.\nThere are certain cognitive distortions including irrational patterns of thinking. Here are a few:\nAll-or-Nothing thinking: ")
        if i['tag']==category:
            if responses == 0:
                switch(i['tag'])
                responses = 1
                return(np.random.choice(i['responses']))   
            if responses == 1:
                responses = 0
                return

if __name__ == "__main__":
    app.run(host="localhost", port=8000, debug=True)