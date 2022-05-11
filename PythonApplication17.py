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
import sys

import train
from train import *

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

def check():
    print('Thoth has entered the chat...')
    while True:
        string = input('Enter: ')

        result = model.predict(pad_sequences(tokenizer.texts_to_sequences([string]), truncating='post', maxlen=max_len))
        category = lbl_encoder.inverse_transform([np.argmax(result)]) # labels[np.argmax(result)] takes attribute w/ highest probability
        for i in data['intents']:
            if i['tag']=='goodbye': break

            if i['tag']==category:
                print(np.random.choice(i['responses']))
                switch(i['tag'])

                break
                #print(i['tag'])
        if i['tag']=='goodbye': break
        
check()

conclusion = max(options, key= lambda x: options[x])
print(conclusion)

if conclusion == "ang":
    print("You might be interested in knowing about CBT, or cognitive behavioral therapy.\n\nThere are certain cognitive distortions including irrational patterns of thinking. Here are a few:\nAll-or-Nothing thinking: ")
if conclusion == "crying":
    print("You might be interested in knowing about CBT, or cognitive behavioral therapy.\n\nThere are certain cognitive distortions including irrational patterns of thinking. Here are a few:\nAll-or-Nothing thinking: ")
if conclusion == "sad":
    print("You might be interested in knowing about CBT, or cognitive behavioral therapy.\n\nThere are certain cognitive distortions including irrational patterns of thinking. Here are a few:\nAll-or-Nothing thinking: ")
if conclusion == "smi":
    print("You might be interested in knowing about CBT, or cognitive behavioral therapy.\n\nThere are certain cognitive distortions including irrational patterns of thinking. Here are a few:\nAll-or-Nothing thinking: ")
if conclusion == "str":
    print("You might be interested in knowing about CBT, or cognitive behavioral therapy.\n\nThere are certain cognitive distortions including irrational patterns of thinking. Here are a few:\nAll-or-Nothing thinking: ")
if conclusion == "smo":
    print("You might be interested in knowing about CBT, or cognitive behavioral therapy.\n\nThere are certain cognitive distortions including irrational patterns of thinking. Here are a few:\nAll-or-Nothing thinking: ")
if conclusion == "tir":
    print("You might be interested in knowing about CBT, or cognitive behavioral therapy.\n\nThere are certain cognitive distortions including irrational patterns of thinking. Here are a few:\nAll-or-Nothing thinking: ")
if conclusion == "wor":
    print("You might be interested in knowing about CBT, or cognitive behavioral therapy.\n\nThere are certain cognitive distortions including irrational patterns of thinking. Here are a few:\nAll-or-Nothing thinking: ")
