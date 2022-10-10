from flask import Flask, render_template
import datetime

app = Flask(__name__)

@app.route("/")
def index():
	return render_template("homelanding/homelanding.html")

@app.route("/test")
def test():
	return "test"

if __name__ == "__main__":
	app.run(debug=True)