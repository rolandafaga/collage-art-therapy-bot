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

"""
import imgtrain
from imgtrain import *

# testing out with check(). This handles the dialogue portion of Thoth

def look():
    print("Looking at your wonderful piece! Give me a second...")
    look_at_image()
    while True:
        string = input('Enter: ')
        if string == 'quit': break
        result = model.predict(pad_sequences(tokenizer.texts_to_sequences([string]), truncating='post', maxlen=max_len))
        category = lbl_encoder.inverse_transform([np.argmax(result)]) # labels[np.argmax(result)]: largest probability in array of probabilities made by predict()
        for i in data['intents']:
            if i['tag']==category:
                print(np.random.choice(i['responses']))
    
look()


ang = 0
cry = 0
sad = 0
smi = 0
str = 0
smo = 0
tir = 0
wor = 0
"""

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
    farewell = "See you next time!"
    while True:
        string = input('Enter: ')
        
        


        result = model.predict(pad_sequences(tokenizer.texts_to_sequences([string]), truncating='post', maxlen=max_len))
        category = lbl_encoder.inverse_transform([np.argmax(result)]) # labels[np.argmax(result)] takes attribute w/ highest probability
        for i in data['intents']:
            if i['tag']=='goodbye' or 'done' in string or 'finished' in string:
                for i in data['intents']:
                    if i['tag']=='goodbye':
                        farewell = np.random.choice(i['responses'])
                break

            if i['tag']==category:
                print(np.random.choice(i['responses']))
                if i['tag']!='greeting' and i['tag']!='thanks' and i['tag']!='name' and i['tag']!='not feeling well':
                    string = input('Enter: ')
                switch(i['tag'])

                break
                #print(i['tag'])
        if i['tag']=='goodbye' or 'done' in string or 'finished' in string: break
        
    return farewell
            
       

farewell = check()

conclusion = max(options, key= lambda x: options[x])
#print(conclusion)

if conclusion == "ang":
    print("I've noticed a pattern of anger in your collage! You might be interested in knowing about CBT, or cognitive behavioral therapy. CBT is a solution oriented form of therapy that teaches how to identify negative feelings, do a reality-check, then challenge and replace them with more rational thoughts.\nExcessive anger can take a toll on your mental health, physical health, relationships, and career. If you feel overwhelmed by anger, don’t hesitate to reach out and get help. CBT for anger management is structured, directive and can teach you coping strategies to manage triggers in an adaptive way. Remember, anger should not be suppressed. Rather, it should be communicated in an assertive, healthy way.")
if conclusion == "crying":
    print("You might be interested in knowing about CBT, or cognitive behavioral therapy.\n\nThere are certain cognitive distortions including irrational patterns of thinking. Here are a few:\nAll-or-Nothing thinking: ")
if conclusion == "sad":
    print("If you are feeling sadness or stress as of recent: a reminder that talking with a loved one, taking proper nutrition, physical exercise, breathing exercises, or listening to positive music are some ways to see at least some glimmers of living.\nIf it gets worse, please contact a qualified local therapist that can help you develop effective coping skills for sadness and other emotions.")
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
print("\n\nI hope you got a chance to look back on and contemplate your responses in our conversation!")
print(farewell)