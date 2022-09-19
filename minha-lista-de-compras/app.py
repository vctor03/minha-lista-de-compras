from flask import Flask, redirect

# Routes

from routes import user

app = Flask(__name__)

# Blueprints

app.register_blueprint(user, url_prefix='/user')

@app.route('/')
def index():
    return redirect('/user')