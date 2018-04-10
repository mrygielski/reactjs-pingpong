import React from 'react';
import Menu from './Menu';
import Results from './Results';
import Paddle from './Paddle';
import Ball from './Ball';

import '../styles/App.css';

class AppComponent extends React.Component {

    constructor(props) {
        super(props);

        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;

        this.ball = { x: -100, y: 0, sX: 6, sY: 7, size: 60 };
        this.player = { x: -100, y: 0, width: 30, height: 300, score: 0 };
        this.cpu = { x: -100, y: 0, width: 30, height: 300, score: 0 };

        document.addEventListener ('mousemove', this.mouseMove);
    }

    ballCenter = () => {
        this.ball.sX = -Math.floor((Math.random() * 10) - 5);
        this.ball.sY = -Math.floor((Math.random() * 10) - 5);
        if (this.ball.sX == 0 ) this.ball.sX = 3;
        if (this.ball.sY == 0 ) this.ball.sY = 3;
        this.ball.x = (this.screenWidth / 2) - (this.ball.size / 2);
        this.ball.y = (this.screenHeight / 2) - (this.ball.size / 2);
    };

    start() {

        document.getElementById('menu').style.display = 'none';
        document.getElementById('scores').style.display = 'table';
        document.querySelector("*").style.cursor = 'none';

        this.player.y = (this.screenHeight / 2) - (this.player.height / 2);
        this.player.x = 20;
        this.cpu.y = (this.screenHeight / 2) - (this.cpu.height / 2);
        this.cpu.x = this.screenWidth - this.cpu.width - 20;

        this.ballCenter();

        document.getElementById('player').style.left = this.player.x + 'px';
        document.getElementById('cpu').style.left = this.cpu.x + 'px';

        var _this = this;
        setInterval(function() {

             // Ball move
            _this.ball.x += _this.ball.sX;
            _this.ball.y += _this.ball.sY;

            // Collision with screen border
            if (_this.ball.x + _this.ball.sX < 0) {
                _this.cpu.score++;
                _this.ballCenter();
            }
            if (_this.ball.x > _this.screenWidth - _this.ball.size - _this.ball.sX) {
                _this.player.score++;
                _this.ballCenter();
            }
            if (_this.ball.y + _this.ball.sY < 0) _this.ball.sY *= -1;
            if (_this.ball.y > _this.screenHeight - _this.ball.size - _this.ball.sY) _this.ball.sY *= -1;

            // Collision with player paddle
            if ((_this.ball.x < _this.player.x + _this.player.width &&
                _this.ball.x + _this.player.width > _this.player.x &&
                _this.ball.y < _this.player.y + _this.player.height &&
                _this.ball.size + _this.ball.y > _this.player.y)) {

                _this.ball.sX = -Math.floor((Math.random() * 10) + 1);
                _this.ball.sY = -Math.floor((Math.random() * 10) + 1);
                _this.ball.sX *= -1;

            }

            // Collision with cpu paddle
            if (_this.ball.x < _this.cpu.x + _this.cpu.width &&
                _this.ball.x + _this.ball.size > _this.cpu.x &&
                _this.ball.y < _this.cpu.y + _this.cpu.height &&
                _this.ball.size + _this.ball.y > _this.cpu.y) {

                _this.ball.sX = Math.floor((Math.random() * 10) + 1);
                _this.ball.sY = Math.floor((Math.random() * 10) + 1);
                _this.ball.sX *= -1;

            }

            // Collision player paddle with top & bottom border
            if (_this.player.y < 0) _this.player.y = 0;
            if (_this.player.y > _this.screenHeight - _this.player.height) _this.player.y = _this.screenHeight - _this.player.height;

            // Collision cpu paddle with top & bottom border
            if (_this.cpu.y < 0) _this.cpu.y = 0;
            if (_this.cpu.y > _this.screenHeight - _this.cpu.height) _this.cpu.y = _this.screenHeight - _this.cpu.height;

            if (_this.ball.x > (_this.screenWidth / 2) && _this.ball.y < _this.cpu.y) _this.cpu.y -= 5;
            if (_this.ball.x > (_this.screenWidth / 2) && _this.ball.y > _this.cpu.y + _this.cpu.height) _this.cpu.y += 5;

            document.getElementById('ball').style.top = _this.ball.y + 'px';
            document.getElementById('ball').style.left = _this.ball.x+ 'px';

            document.getElementById('player').style.top = _this.player.y + 'px';
            document.getElementById('cpu').style.top = _this.cpu.y + 'px';

            document.getElementById('scorePlayer').innerText = _this.player.score;
            document.getElementById('scoreCpu').innerText = _this.cpu.score;

        }, 10);

    }

    mouseMove = (e) => {
        e.stopPropagation ();
        this.player.y = e.screenY - (this.player.height / 2);
    };

    render() {

        return (
        <div className="main" >

            <Menu gameInit={this.start.bind(this) } className="center" />

            <Paddle cpu="0" id="player" posX={this.player.x} posY={this.player.y} width={this.player.width} height={this.player.height}/>
            <Paddle cpu="1" id="cpu" posX={this.cpu.x} posY={this.cpu.y} width={this.cpu.width} height={this.cpu.height}/>
            <Ball posX={this.ball.x} posY={this.ball.y} size={this.ball.size} />

            <Results player={this.player.score} cpu={this.cpu.score}/>

        </div>
        );
    }

}

export default AppComponent;