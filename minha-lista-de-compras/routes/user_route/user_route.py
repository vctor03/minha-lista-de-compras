from flask import Blueprint, render_template

user = Blueprint('user', __name__, template_folder='templates')

@user.route('/')
def index():
    return 'User Route'

@user.route('/list')
def list_route():
    return render_template('list/index.html')

@user.route('/login')
def login_route():
    return render_template('login/index.html')