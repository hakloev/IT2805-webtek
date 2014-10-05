from flask import Flask, render_template, redirect, url_for
app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/attractions/<int:attractionId>")
def attractions(attractionId):
    print("DEBUG: Attraction requested: %d" % (attractionId))
    if attractionId == 1:
        return render_template("attractions/attraction1.html")
    else:
        return "Can't find the attractionId %d" % (attractionId)

@app.route("/restaurant")
def restaurant():
    return "Here will be restaurant html"

@app.route("/events")
def events():    
    return "Here will be events html"

@app.route("/tickets")
def tickets():
    return "Here will be tickets html"

@app.route("/contact")
def contact():
    return "Here will be contact html"

if __name__ == "__main__":
    app.run(host='127.0.0.1', 
            port=80, 
            debug=True)
