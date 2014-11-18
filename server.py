#!/usr/bin/python
# -*- coding: utf-8 -*-

import os
from flask import Flask, render_template, flash, redirect, url_for, request
from xml.etree import ElementTree as ET
from xml.dom import minidom


app = Flask(__name__)
app.secret_key = 'r\xe4@\x00\xa4\xf9\xe6.@S\x08/\xday\xf8\x9b\xfeR\xbe\x17\xfdK[\x90'

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/attractions")
@app.route("/attractions/overview")
@app.route("/attractions/id/<string:attractionId>")
def attractions(attractionId=None):
    attractions = {
            '1' : 'attraction1.html',
            '2' : 'attraction2.html',
            '3' : 'attraction3.html',
            '4' : 'attraction4.html',
            '5' : 'attraction5.html',
            '6' : 'attraction6.html'
    }
    if attractionId == None:
        return render_template('attractions/overview.html')
    elif attractionId in attractions.keys():
        return render_template('attractions/%s' % (attractions[attractionId]))
    else:
        return render_template('index.html')

@app.route("/restaurant")
def restaurant():
    return render_template('subpages/restaurant.html')

@app.route("/events")
def events():    
    return render_template('subpages/events.html')

@app.route("/tickets", methods=["GET", "POST"])
def tickets():
    if request.method == "POST":
        flash(u'Takk for kjøpet! En bekreftelse på %s billett(er) er sendt til %s!' % (request.form['antallBilletter'], request.form['email']))
        return render_template('index.html')
    else:
        return render_template('subpages/tickets.html')

@app.route("/contact", methods=["GET", "POST"])
def contact():
    if request.method == "POST":
        flash(u'Takk for din hendvendelse. Vi vil ta kontakt så fort som mulig!');
        return render_template('index.html')
    else: 
        return render_template('subpages/contact.html')

@app.route("/references")
def references():
    return render_template('subpages/references.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0', 
            port=1337, 
            debug=True)
