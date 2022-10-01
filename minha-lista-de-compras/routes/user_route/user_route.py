from flask import Blueprint, render_template, redirect

user = Blueprint('user', __name__, template_folder='templates')

@user.route('/')
def index():
    return render_template('user/index.html')

@user.route('/list')
def list_route():
    return render_template('list/index.html')

@user.route('/login')
def login_route():
    return render_template('login/index.html')

@user.route('/login_post', methods=["POST"])
def login_post_route():
    return redirect('/user/login')