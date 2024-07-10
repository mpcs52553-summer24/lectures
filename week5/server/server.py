# Run this program: flask --app server run

from flask import Flask
from flask import render_template
from flask import request

app = Flask(__name__)


@app.route("/") # 'root' path of the url
def home():
    return render_template('login_form.html')

@app.route("/submit_login", methods=['POST'])
def handle_login():
    if request.form['email'] == 'me@example.com' and request.form['password'] == 'maroon':
        return render_template('login_success.html')
    
    return render_template('login_failure.html')

@app.route("/account", methods=["GET"])
def show_account():
    # Based on the user, look up their profile information
    # SQL.....
    email = "me@example.com"
    password = "maroon"
    return render_template("account.html", email=email, password=password)

