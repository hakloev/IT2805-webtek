from flask import Flask, render_template, redirect, url_for
app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/attractions/<int:attractionId>")
def attractions(attractionId):
    print("DEBUG: Attraction requested: %d" % (attractionId))
    if attractionId == 1:
        return render_template('attractions/attraction1.html')
    else:
        return "Can't find the attractionId %d" % (attractionId)

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
