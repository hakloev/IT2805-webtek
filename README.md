GLOSEBERG
=========

### Setup

The site is hosted at [woz.no](http://gloseberg.woz.no) (or [folk.ntnu.no](http://folk.ntnu.no/haakool), but it's only a redirect to woz.no, by adding a .htaccess file in the public_html folder).

If you want to setup your own local version you need to install [flask](http://flask.pocoo.org) on your computer/server. Since the site is implemented using flask, you need to run the command:

```bash
pip3 install Flask
```

This will install a local version. If you don't want flask to be installed globally, it's possible to setup the server environment with [virtualenv](http://virtualenv.readthedocs.org/en/latest/). Also keep in mind that the server code is implemented with Python3, wich yields that you need this installed on your computer.

To start the server, navigate to the root folder of this repo and run the command:

```bash
python3 server.py
OR
sudo python3 server.py
```

To change the default port the server is running on (1337), you can change this in the main function, by editing the host argument. 

```python
if __name__ == "__main__":
    app.run(host='0.0.0.0', 
            port=<INSERT PORT NUMBER HERE>, 
            debug=True)
```

### Technologies

We have used the following technologies to implement our project:

* HTML5
* CSS3
* JavaScript
* Flask (based on Werkzeug and Jinja 2)
* XML??

HTML5 is the markup language used to build the web site. It handles all the information displayed on the site. That is, text, images, links etc. Each of the pages on the website, is a seperate HTML file. CSS3 is used to style the web site. It is responsible for how the HTML is displayed to the visitor. In our case, we use a single style sheet which is included in all of the pages. Thus, we use the same fonts, colors etc, which makes for a consistent look on the site. Lastly, javascript is used for dynamic elements on the website. In our case, this includes the image carousel on the front page, form validation and the ticket price on the tickets page.

In our implementation, we chose to use a Python framework called Flask. The most important feature of this framework for our part, is the possibility of including HTML templates. We can create a header and a footer template, which is included in all of the pages. So if we need to change something in the header for example, we can change only the template, and the changes will be reflected on all of the pages. Flask also handles our routing, and routes URL's to the correct files.

### Group members

* Fredrik Christoffer Berg
* Truls Mørk Pettersen
* Håkon Ødegård Løvdal
