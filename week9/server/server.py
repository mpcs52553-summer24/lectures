# Run this program: flask --app server run

from flask import Flask
from flask import render_template
from flask import request
from flask import make_response
from flask import redirect
from flask import url_for

app = Flask(__name__)


@app.route("/") # 'root' path of the url
def home():
    return render_template('login_form.html', user=lookup_user_from_cookie())


@app.route("/logout") # 'root' path of the url
def logout():
    resp = make_response(redirect("/"))
    resp.delete_cookie('user_id') 
    return resp

@app.route("/submit_login", methods=['POST'])
def handle_login():
    user = next((u for u in users() if u['email'] == request.form['email'] and u['password'] == request.form['password']), None)
    if user:
        resp = make_response(render_template('buy.html'))
        resp.set_cookie('user_id', str(user['id'])) 
        return resp
    
    return render_template('login_failure.html')


@app.route("/account", methods=["GET"])
def show_account():
    user = lookup_user_from_cookie()
    if (user is None):
        user = users()[0]

    return render_template("account.html", email=user['email'], password=user['password'], cc=user['cc'])


def lookup_user_from_cookie():
    user = None
    user_id = request.cookies.get('user_id', None)
    if (user_id is not None):
        user = next((user_data for user_data in users() if user_data['id'] == int(user_id)), None)        
    return user

def users():
    return [
        { 'id': 1, 'email': 'me@example.com', 'password': 'maroon', 'cc': "4111 2222 3333 9876   12/28  321" },
        { 'id': 2, 'email': 'cookiemonster@example.com', 'password': 'cookies', 'cc': "5111 1234 3333 3541   5/27  789" },
    ]

# request.cookies.get(key)
# resp = make_response(render_template(..)) 
# resp.set_cookie('username', name) 