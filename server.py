import os
from flask import Flask, render_template, flash, redirect, url_for

app = Flask(__name__)
app.secret_key = 'r\xe4@\x00\xa4\xf9\xe6.@S\x08/\xday\xf8\x9b\xfeR\xbe\x17\xfdK[\x90'

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/attractions/<int:attractionId>")
def attractions(attractionId):
    print("DEBUG: Attraction requested: %d" % (attractionId))
    if attractionId == 1:
        flash('You called for attraction %d' % (attractionId))
        return render_template('attractions/attraction1.html')
    else:
        flash("Can't find the attractionId %d" % (attractionId))
        return render_template('index.html')

@app.route("/restaurant")
def restaurant():
    return render_template('restaurant.html')

@app.route("/events")
def events():    
    return render_template('events.html')

@app.route("/tickets")
def tickets():
    return render_template('tickets.html')

@app.route("/contact")
def contact():
    return render_template('contact.html')

if __name__ == "__main__":
    app.run(host='127.0.0.1', 
            port=80, 
            debug=True)
