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
#import imgrecog1
#from imgrecog1 import *

# testing out with check(). This handles the dialogue portion of Thoth

def look():
    print("Looking at your wonderful piece! Give me a second...")
#    look_at_image()
    
look()

def check():
    print('Thoth has entered the chat...')
    while True:
        string = input('Enter: ')
        if string == 'quit': break
        result = model.predict(pad_sequences(tokenizer.texts_to_sequences([string]), truncating='post', maxlen=max_len))
        category = lbl_encoder.inverse_transform([np.argmax(result)]) # labels[np.argmax(result)]
        for i in data['intents']:
            if i['tag']==category:
                print(np.random.choice(i['responses']))
check()

