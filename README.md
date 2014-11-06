GLOSEBERG
=========

### Setup

The site is hosted at [woz.no](http://gloseberg.woz.no). If you want to setup your own local version you need to install [flask](http://flask.pocoo.org) on your computer/server. Since the site is implemented using flask, you need to run the command:

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
