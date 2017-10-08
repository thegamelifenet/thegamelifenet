webpackJsonp([0],{

/***/ 107:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 107;

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 148;

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__canvas__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blockpro__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__provider_mazedata__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, mazeData) {
        this.navCtrl = navCtrl;
        this.mazeData = mazeData;
        this.canvas = new __WEBPACK_IMPORTED_MODULE_2__canvas__["a" /* Canvas */]();
        this.blockpro = new __WEBPACK_IMPORTED_MODULE_3__blockpro__["a" /* Blockpro */];
        this.isRun = true;
    }
    HomePage.prototype.ngAfterViewInit = function () {
        this.canvas.init(this.canvasArea, this.mazeData);
        this.blockpro.init(this.blocklyArea, this.blocklyDiv, this.mazeData);
    };
    HomePage.prototype.onLevelBtnClicked = function (btn, level) {
        this.mazeData.resetLevel(level);
        this.canvas.reset();
        this.blockpro.reset();
    };
    HomePage.prototype.onRunBtnClicked = function (btn) {
        if (this.isRun) {
            this.blockpro.run();
            this.isRun = false;
            btn._elementRef.nativeElement.innerText = "Reset";
        }
        else {
            this.canvas.reset();
            this.isRun = true;
            btn._elementRef.nativeElement.innerText = "Run";
        }
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('canvasArea'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], HomePage.prototype, "canvasArea", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('blocklyArea'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], HomePage.prototype, "blocklyArea", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('blocklyDiv'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], HomePage.prototype, "blocklyDiv", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/shanegxxiao/Documents/edu/src/pages/home/home.html"*/'<ion-content>\n\n    <div #canvasArea class="canvasArea">\n        <canvas id="canvasArea"></canvas>\n    </div>\n    <div #blocklyArea></div>\n    <div #blocklyDiv class="blocklyDiv"></div>\n    <div #levelBtns class="levelBtns">\n        <ion-grid>\n            <ion-row>\n                <ion-col col-1><button ion-button full #levelBtn1 [ngClass]="{true: \'\', false: \'outline\'}[false]" (click)="onLevelBtnClicked(levelBtn1, 1)">1</button></ion-col>\n                <ion-col col-1><button ion-button full #levelBtn2 outline (click)="onLevelBtnClicked(levelBtn2, 2)">2</button></ion-col>\n                <ion-col col-1><button ion-button full #levelBtn3 outline (click)="onLevelBtnClicked(levelBtn3, 3)">3</button></ion-col>\n                <ion-col col-1><button ion-button full #levelBtn4 outline (click)="onLevelBtnClicked(levelBtn4, 4)">4</button></ion-col>\n                <ion-col col-1><button ion-button full #levelBtn5 outline (click)="onLevelBtnClicked(levelBtn5, 5)">5</button></ion-col>\n                <ion-col col-1><button ion-button full #levelBtn6 outline (click)="onLevelBtnClicked(levelBtn6, 6)">6</button></ion-col>\n                <ion-col col-1><button ion-button full #levelBtn7 outline (click)="onLevelBtnClicked(levelBtn7, 7)">7</button></ion-col>\n                <ion-col col-1><button ion-button full #levelBtn8 outline (click)="onLevelBtnClicked(levelBtn8, 8)">8</button></ion-col>\n                <ion-col col-1><button ion-button full #levelBtn9 outline (click)="onLevelBtnClicked(levelBtn9, 9)">9</button></ion-col>\n                <ion-col col-1><button ion-button full #levelBtn10 outline (click)="onLevelBtnClicked(levelBtn10, 10)">10</button></ion-col>\n                <ion-col col-2><button ion-button full (click)="onRunBtnClicked(runBtn)" color="secondary" #runBtn>Run</button></ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/shanegxxiao/Documents/edu/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__provider_mazedata__["a" /* MazeData */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MazeData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MazeData = (function () {
    function MazeData() {
        this.LEVEL = 1;
        this.maxBlock = [undefined,
            Infinity, Infinity, 2, 5, 5, 5, 5, 10, 7, 10];
        this.MAX_BLOCK = this.maxBlock[this.LEVEL];
        // Crash type constants.
        this.CRASH_STOP = 1;
        this.CRASH_SPIN = 2;
        this.CRASH_FALL = 3;
        // sprite: A 1029x51 set of 21 avatar images.
        // tiles: A 250x200 set of 20 map images.
        // marker: A 20x34 goal image.
        // background: An optional 400x450 background image, or false.
        // graph: Colour of optional grid lines, or false.
        // look: Colour of sonar-like look icon.
        // winSound: List of sounds (in various formats) to play when the player wins.
        // crashSound: List of sounds (in various formats) for player crashes.
        // crashType: Behaviour when player crashes (stop, spin, or fall).
        this.SKIN = [
            {
                sprite: 'maze/astro.png',
                tiles: 'maze/tiles_astro.png',
                marker: 'maze/marker.png',
                background: 'maze/bg_astro.jpg',
                // Coma star cluster, photo by George Hatfield, used with permission.
                graph: false,
                look: '#fff',
                winSound: ['maze/win.mp3', 'maze/win.ogg'],
                crashSound: ['maze/fail_astro.mp3', 'maze/fail_astro.ogg'],
                crashType: this.CRASH_SPIN
            }
        ][0];
        /**
         * The types of squares in the maze, which is represented
         * as a 2D array of SquareType values.
         * @enum {number}
         */
        this.SquareType = {
            WALL: 0,
            OPEN: 1,
            START: 2,
            FINISH: 3
        };
        // The maze square constants defined above are inlined here
        // for ease of reading and writing the static mazes.
        this.map = [
            // Level 0.
            undefined,
            // Level 1.
            [[0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 2, 1, 3, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0]],
            // Level 2.
            [[0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 1, 3, 0, 0, 0],
                [0, 0, 2, 1, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0]],
            // Level 3.
            [[0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 2, 1, 1, 1, 1, 3, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0]],
            // Level 4.
            /**
             * Note, the path continues past the start and the goal in both directions.
             * This is intentionally done so users see the maze is about getting from
             * the start to the goal and not necessarily about moving over every part of
             * the maze, 'mowing the lawn' as Neil calls it.
             */
            [[0, 0, 0, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 0, 0, 1, 1],
                [0, 0, 0, 0, 0, 3, 1, 0],
                [0, 0, 0, 0, 1, 1, 0, 0],
                [0, 0, 0, 1, 1, 0, 0, 0],
                [0, 0, 1, 1, 0, 0, 0, 0],
                [0, 2, 1, 0, 0, 0, 0, 0],
                [1, 1, 0, 0, 0, 0, 0, 0]],
            // Level 5.
            [[0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 3, 0, 0],
                [0, 0, 0, 0, 0, 1, 0, 0],
                [0, 0, 0, 0, 0, 1, 0, 0],
                [0, 0, 0, 0, 0, 1, 0, 0],
                [0, 0, 0, 0, 0, 1, 0, 0],
                [0, 0, 0, 2, 1, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0]],
            // Level 6.
            [[0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 1, 1, 1, 1, 1, 0, 0],
                [0, 1, 0, 0, 0, 1, 0, 0],
                [0, 1, 1, 3, 0, 1, 0, 0],
                [0, 0, 0, 0, 0, 1, 0, 0],
                [0, 2, 1, 1, 1, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0]],
            // Level 7.
            [[0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 1, 1, 0],
                [0, 2, 1, 1, 1, 1, 0, 0],
                [0, 0, 0, 0, 0, 1, 1, 0],
                [0, 1, 1, 3, 0, 1, 0, 0],
                [0, 1, 0, 1, 0, 1, 0, 0],
                [0, 1, 1, 1, 1, 1, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 0]],
            // Level 8.
            [[0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 1, 1, 1, 1, 0, 0, 0],
                [0, 1, 0, 0, 1, 1, 0, 0],
                [0, 1, 1, 1, 0, 1, 0, 0],
                [0, 0, 0, 1, 0, 1, 0, 0],
                [0, 2, 1, 1, 0, 3, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0]],
            // Level 9.
            [[0, 0, 0, 0, 0, 0, 0, 0],
                [0, 1, 1, 1, 1, 1, 0, 0],
                [0, 0, 1, 0, 0, 0, 0, 0],
                [3, 1, 1, 1, 1, 1, 1, 0],
                [0, 1, 0, 1, 0, 1, 1, 0],
                [1, 1, 1, 1, 1, 0, 1, 0],
                [0, 1, 0, 1, 0, 2, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 0]],
            // Level 10.
            [[0, 0, 0, 0, 0, 0, 0, 0],
                [0, 1, 1, 0, 3, 0, 1, 0],
                [0, 1, 1, 0, 1, 1, 1, 0],
                [0, 1, 0, 1, 0, 1, 0, 0],
                [0, 1, 1, 1, 1, 1, 1, 0],
                [0, 0, 0, 1, 0, 0, 1, 0],
                [0, 2, 1, 1, 1, 0, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 0]]
        ];
        this.MAP = this.map[this.LEVEL];
        /**
         * Measure maze dimensions and set sizes.
         * ROWS: Number of tiles down.
         * COLS: Number of tiles across.
         * SQUARE_SIZE: Pixel height and width of each maze square (i.e. tile).
         */
        this.ROWS = 8;
        this.COLS = 8;
        this.SQUARE_SIZE = 50;
        this.PEGMAN_HEIGHT = 51;
        this.PEGMAN_WIDTH = 49;
        this.MAZE_WIDTH = this.SQUARE_SIZE * this.COLS;
        this.MAZE_HEIGHT = this.SQUARE_SIZE * this.ROWS;
        this.PATH_WIDTH = this.SQUARE_SIZE / 3;
        /**
         * Constants for cardinal directions.  Subsequent code assumes these are
         * in the range 0..3 and that opposites have an absolute difference of 2.
         * @enum {number}
         */
        this.DirectionType = {
            NORTH: 0,
            EAST: 1,
            SOUTH: 2,
            WEST: 3
        };
        this.InitDir = [
            this.DirectionType.EAST,
            this.DirectionType.EAST,
            this.DirectionType.EAST,
            this.DirectionType.EAST,
            this.DirectionType.EAST,
            this.DirectionType.EAST,
            this.DirectionType.EAST,
            this.DirectionType.EAST,
            this.DirectionType.EAST,
            this.DirectionType.EAST,
        ][this.LEVEL];
        /**
         * Outcomes of running the user program.
         */
        this.ResultType = {
            UNSET: 0,
            SUCCESS: 1,
            FAILURE: -1,
            TIMEOUT: 2,
            ERROR: -2
        };
        // Map each possible shape to a sprite.
        // Input: Binary string representing Centre/North/West/South/East squares.
        // Output: [x, y] coordinates of each tile's sprite in tiles.png.
        this.tile_SHAPES = {
            '10010': [4, 0],
            '10001': [3, 3],
            '11000': [0, 1],
            '10100': [0, 2],
            '11010': [4, 1],
            '10101': [3, 2],
            '10110': [0, 0],
            '10011': [2, 0],
            '11001': [4, 2],
            '11100': [2, 3],
            '11110': [1, 1],
            '10111': [1, 0],
            '11011': [2, 1],
            '11101': [1, 2],
            '11111': [2, 2],
            'null0': [4, 3],
            'null1': [3, 0],
            'null2': [3, 1],
            'null3': [0, 3],
            'null4': [1, 3]
        };
        this.tileRow = 4;
        this.tileCol = 5;
        this.toolbox = [
            // level 0
            undefined,
            // level 1
            '<xml id="toolbox" style="display: none;">' +
                '<block type="maze_moveForward"></block>' +
                '<block type="maze_turn">' +
                '<field name="DIR">turnLeft</field>' +
                '</block>' +
                '<block type="maze_turn">' +
                '<field name="DIR">turnRight</field>' +
                '</block>' +
                '</xml>',
            // level 2
            '<xml id="toolbox" style="display: none;">' +
                '<block type="maze_moveForward"></block>' +
                '<block type="maze_turn">' +
                '<field name="DIR">turnLeft</field>' +
                '</block>' +
                '<block type="maze_turn">' +
                '<field name="DIR">turnRight</field>' +
                '</block>' +
                '</xml>',
            // level 3
            '<xml id="toolbox" style="display: none;">' +
                '<block type="maze_moveForward">' +
                '</block><block type="maze_turn">' +
                '<field name="DIR">turnLeft</field>' +
                '</block>' +
                '<block type="maze_turn">' +
                '<field name="DIR">turnRight</field>' +
                '</block>' +
                '<block type="maze_forever"></block>' +
                '</xml>',
            // level 4
            '<xml id="toolbox" style="display: none;">' +
                '<block type="maze_moveForward">' +
                '</block><block type="maze_turn">' +
                '<field name="DIR">turnLeft</field>' +
                '</block>' +
                '<block type="maze_turn">' +
                '<field name="DIR">turnRight</field>' +
                '</block>' +
                '<block type="maze_forever"></block>' +
                '</xml>',
            // level 5
            '<xml id="toolbox" style="display: none;">' +
                '<block type="maze_moveForward">' +
                '</block><block type="maze_turn">' +
                '<field name="DIR">turnLeft</field>' +
                '</block>' +
                '<block type="maze_turn">' +
                '<field name="DIR">turnRight</field>' +
                '</block>' +
                '<block type="maze_forever"></block>' +
                '</xml>',
            // level 6
            '<xml id="toolbox" style="display: none;">' +
                '<block type="maze_moveForward"></block>' +
                '<block type="maze_turn">' +
                '<field name="DIR">turnLeft</field>' +
                '</block>' +
                '<block type="maze_turn">' +
                '<field name="DIR">turnRight</field>' +
                '</block>' +
                '<block type="maze_forever">' +
                '</block>' +
                '<block type="maze_if">' +
                '<field name="DIR">ahead</field>' +
                '</block>' +
                '</xml>',
            // level 7
            '<xml id="toolbox" style="display: none;">' +
                '<block type="maze_moveForward"></block>' +
                '<block type="maze_turn">' +
                '<field name="DIR">turnLeft</field></block>' +
                '<block type="maze_turn">' +
                '<field name="DIR">turnRight</field>' +
                '</block>' +
                '<block type="maze_forever"></block>' +
                '<block type="maze_if"></block>' +
                '</xml>',
            // level 8
            '<xml id="toolbox" style="display: none;">' +
                '<block type="maze_moveForward"></block>' +
                '<block type="maze_turn">' +
                '<field name="DIR">turnLeft</field></block>' +
                '<block type="maze_turn">' +
                '<field name="DIR">turnRight</field>' +
                '</block>' +
                '<block type="maze_forever"></block>' +
                '<block type="maze_if"></block>' +
                '</xml>',
            // level 9
            '<xml id="toolbox" style="display: none;">' +
                '<block type="maze_moveForward"></block>' +
                '<block type="maze_turn">' +
                '<field name="DIR">turnLeft</field>' +
                '</block>' +
                '<block type="maze_turn">' +
                '<field name="DIR">turnRight</field>' +
                '</block>' +
                '<block type="maze_forever"></block>' +
                '<block type="maze_if"></block>' +
                '<block type="maze_ifElse"></block>' +
                '</xml>',
            // level 10
            '<xml id="toolbox" style="display: none;">' +
                '<block type="maze_moveForward"></block>' +
                '<block type="maze_turn">' +
                '<field name="DIR">turnLeft</field>' +
                '</block>' +
                '<block type="maze_turn">' +
                '<field name="DIR">turnRight</field>' +
                '</block>' +
                '<block type="maze_forever"></block>' +
                '<block type="maze_if"></block>' +
                '<block type="maze_ifElse"></block>' +
                '</xml>'
        ];
        this.TOOLBOX = this.toolbox[this.LEVEL];
    }
    MazeData.prototype.resetLevel = function (level) {
        this.LEVEL = level;
        this.MAX_BLOCK = this.maxBlock[this.LEVEL];
        this.MAP = this.map[this.LEVEL];
        this.TOOLBOX = this.toolbox[this.LEVEL];
    };
    return MazeData;
}());
MazeData = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], MazeData);

//# sourceMappingURL=mazedata.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(213);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__provider_mazedata__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: []
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_7__provider_mazedata__["a" /* MazeData */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/shanegxxiao/Documents/edu/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/shanegxxiao/Documents/edu/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Canvas; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__maze__ = __webpack_require__(264);

var Canvas = (function () {
    function Canvas() {
    }
    Canvas.prototype.init = function (ca, md) {
        this.canvasArea = ca;
        this.mazeData = md;
        this.constructResourceArray();
        cc.game.onStart = this.onStart.bind(this);
        cc.game.run("canvasArea");
    };
    Canvas.prototype.onStart = function () {
        //If referenced loading.js, please remove it
        if (!cc.sys.isNative && document.getElementById("cocosLoading")) {
            document.body.removeChild(document.getElementById("cocosLoading"));
        }
        var designSize = cc.size(400, 400);
        cc.view.setDesignResolutionSize(designSize.width, designSize.height, cc.ResolutionPolicy.FIXED_HEIGHT);
        //load resources
        cc.loader.resPath = "assets";
        cc.LoaderScene.preload(this.resources, function () {
            this.scene = new __WEBPACK_IMPORTED_MODULE_0__maze__["a" /* MazeScene */]();
            this.scene.init(this.mazeData);
            cc.director.runScene(this.scene);
        }, this);
    };
    Canvas.prototype.constructResourceArray = function () {
        this.resources = [
            this.mazeData.SKIN.background,
            this.mazeData.SKIN.tiles,
            this.mazeData.SKIN.marker,
            this.mazeData.SKIN.sprite
        ];
    };
    Canvas.prototype.reset = function () {
        this.scene.reset();
    };
    return Canvas;
}());

//# sourceMappingURL=canvas.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MazeScene; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__player__ = __webpack_require__(265);

var MazeLayer = cc.LayerColor.extend({
    mazeData: null,
    playground: null,
    player: null,
    init: function (mazeData) {
        this._super();
        this.mazeData = mazeData;
        var size = cc.director.getWinSize();
        this.playground = cc.Sprite.create(this.mazeData.SKIN.background);
        this.playground.setPosition(size.width / 2, size.height / 2);
        this.addChild(this.playground, 0);
        this.drawMapAndCreatePlayer();
    },
    normalizeTileIdx: function (x, y) {
        if (x < 0 || x >= this.mazeData.ROWS || y < 0 || y >= this.mazeData.COLS) {
            return '0';
        }
        return (this.mazeData.MAP[y][x] == this.mazeData.SquareType.WALL) ? '0' : '1';
    },
    drawMapAndCreatePlayer: function () {
        for (var x = 0; x < this.mazeData.ROWS; x++) {
            for (var y = 0; y < this.mazeData.COLS; y++) {
                // Draw the tile.
                // @{
                // Compute the tile index.
                var tile = this.normalizeTileIdx(x, y) +
                    this.normalizeTileIdx(x, y - 1) +
                    this.normalizeTileIdx(x + 1, y) +
                    this.normalizeTileIdx(x, y + 1) +
                    this.normalizeTileIdx(x - 1, y); // East.
                if (!this.mazeData.tile_SHAPES[tile]) {
                    // Empty square.  Use null0 for large areas, with null1-4 for borders.
                    // Add some randomness to avoid large empty spaces.
                    if (tile == '00000' && Math.random() > 0.3) {
                        tile = 'null0';
                    }
                    else {
                        tile = 'null' + Math.floor(1 + Math.random() * 4);
                    }
                }
                var left = this.mazeData.tile_SHAPES[tile][0];
                var top = this.mazeData.tile_SHAPES[tile][1];
                var sprite = cc.Sprite.create(this.mazeData.SKIN.tiles, cc.rect(left * this.mazeData.SQUARE_SIZE, top * this.mazeData.SQUARE_SIZE, this.mazeData.SQUARE_SIZE, this.mazeData.SQUARE_SIZE));
                sprite.setAnchorPoint(0, 0);
                sprite.setPosition(x * this.mazeData.SQUARE_SIZE, (this.mazeData.COLS - y - 1) * this.mazeData.SQUARE_SIZE);
                this.playground.addChild(sprite, 1);
                // @}
                // Draw the target marker
                if (this.mazeData.MAP[y][x] == this.mazeData.SquareType.FINISH) {
                    var endMarker = cc.Sprite.create(this.mazeData.SKIN.marker);
                    endMarker.setAnchorPoint(0.5, 0);
                    endMarker.setPosition(x * this.mazeData.SQUARE_SIZE + 25, (this.mazeData.COLS - y - 1) * this.mazeData.SQUARE_SIZE + 25);
                    this.playground.addChild(endMarker, 2);
                }
                // Draw the player
                if (this.mazeData.MAP[y][x] == this.mazeData.SquareType.START) {
                    this.player = new __WEBPACK_IMPORTED_MODULE_0__player__["a" /* Player */]();
                    this.player.initPlayer(this.mazeData);
                    this.player.setAnchorPoint(0, -0.2);
                    this.player.setPosition(x * this.mazeData.SQUARE_SIZE, (this.mazeData.COLS - y - 1) * this.mazeData.SQUARE_SIZE);
                    this.playground.addChild(this.player, 3);
                }
            }
        }
    }
});
var MazeScene = cc.Scene.extend({
    mazeData: null,
    layer: null,
    onEnter: function () {
        this._super();
        this.reset();
    },
    init: function (mazeData) {
        this.mazeData = mazeData;
    },
    exportValueToWindow: function (key, value) {
        window[key] = value;
    },
    reset: function () {
        this.removeChild(this.layer);
        this.layer = new MazeLayer();
        this.addChild(this.layer);
        this.layer.init(this.mazeData);
        this.exportValueToWindow('maze_player', this.layer.player);
    },
});

//# sourceMappingURL=maze.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Player; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__playeranims__ = __webpack_require__(266);

var Player = cc.Sprite.extend({
    mazeData: null,
    currentDir: __WEBPACK_IMPORTED_MODULE_0__playeranims__["a" /* playerAnims */].DIR_ENUM.NONE,
    pendingActions: [],
    playingAction: null,
    moveDir: [
        { x: 1, y: 0 },
        { x: 0, y: -1 },
        { x: -1, y: 0 },
        { x: 0, y: 1 },
    ],
    stepTime: 0.5,
    result: null,
    initPlayer: function (mazeData) {
        this.mazeData = mazeData;
        __WEBPACK_IMPORTED_MODULE_0__playeranims__["a" /* playerAnims */].init(mazeData);
        this.clearPendingActions();
        this.setSpriteFrame(__WEBPACK_IMPORTED_MODULE_0__playeranims__["a" /* playerAnims */].playerFrameName(20));
        this.initDir();
        this.scheduleUpdate();
        this.result = this.mazeData.ResultType.UNSET;
    },
    initDir: function () {
        this.schedulePlayAction(__WEBPACK_IMPORTED_MODULE_0__playeranims__["a" /* playerAnims */].getAnim(__WEBPACK_IMPORTED_MODULE_0__playeranims__["a" /* playerAnims */].ANIMATE_ENUM.CHEER));
        this.schedulePlayAction(__WEBPACK_IMPORTED_MODULE_0__playeranims__["a" /* playerAnims */].getAnim(__WEBPACK_IMPORTED_MODULE_0__playeranims__["a" /* playerAnims */].ANIMATE_ENUM.S2E));
        this.currentDir = __WEBPACK_IMPORTED_MODULE_0__playeranims__["a" /* playerAnims */].DIR_ENUM.E;
    },
    update: function () {
        if (this.result == this.mazeData.ResultType.UNSET) {
            if (this.checkWin() == true) {
                this.result = this.mazeData.ResultType.SUCCESS;
                this.clearPendingActions();
                this.schedulePlayAction(__WEBPACK_IMPORTED_MODULE_0__playeranims__["a" /* playerAnims */].getAnim(__WEBPACK_IMPORTED_MODULE_0__playeranims__["a" /* playerAnims */].ANIMATE_ENUM.CHEER));
                return;
            }
            if (this.checkFail() == true) {
                this.result = this.mazeData.ResultType.FAILURE;
                this.clearPendingActions();
                this.stopPlayingAction();
                var deltaPos = cc.pMult(this.moveDir[this.currentDir], this.mazeData.SQUARE_SIZE);
                this.playAction(cc.repeatForever(cc.spawn(cc.rotateBy(2, 20, 20), cc.moveBy(2, deltaPos))));
                return;
            }
        }
    },
    moveForward: function () {
        var self = this;
        self.schedulePlayAction(cc.callFunc(function () {
            var deltaPos = cc.pMult(self.moveDir[self.currentDir], self.mazeData.SQUARE_SIZE);
            self.runAction(cc.moveBy(self.stepTime, deltaPos));
        }));
    },
    turnLeft: function () {
        var self = this;
        self.schedulePlayAction(cc.sequence([
            __WEBPACK_IMPORTED_MODULE_0__playeranims__["a" /* playerAnims */].getTurnLAnim(self.currentDir),
            cc.callFunc(function () {
                self.currentDir = self.getTurnLeftDir();
            })
        ]));
    },
    getTurnLeftDir: function () {
        switch (this.currentDir) {
            case __WEBPACK_IMPORTED_MODULE_0__playeranims__["a" /* playerAnims */].DIR_ENUM.E:
                return __WEBPACK_IMPORTED_MODULE_0__playeranims__["a" /* playerAnims */].DIR_ENUM.N;
            case __WEBPACK_IMPORTED_MODULE_0__playeranims__["a" /* playerAnims */].DIR_ENUM.N:
                return __WEBPACK_IMPORTED_MODULE_0__playeranims__["a" /* playerAnims */].DIR_ENUM.W;
            case __WEBPACK_IMPORTED_MODULE_0__playeranims__["a" /* playerAnims */].DIR_ENUM.W:
                return __WEBPACK_IMPORTED_MODULE_0__playeranims__["a" /* playerAnims */].DIR_ENUM.S;
            case __WEBPACK_IMPORTED_MODULE_0__playeranims__["a" /* playerAnims */].DIR_ENUM.S:
                return __WEBPACK_IMPORTED_MODULE_0__playeranims__["a" /* playerAnims */].DIR_ENUM.E;
        }
    },
    turnRight: function () {
        var self = this;
        self.schedulePlayAction(cc.sequence([
            __WEBPACK_IMPORTED_MODULE_0__playeranims__["a" /* playerAnims */].getTurnRAnim(self.currentDir),
            cc.callFunc(function () {
                self.currentDir = self.getTurnRightDir();
            })
        ]));
    },
    getTurnRightDir: function () {
        switch (this.currentDir) {
            case __WEBPACK_IMPORTED_MODULE_0__playeranims__["a" /* playerAnims */].DIR_ENUM.E:
                return __WEBPACK_IMPORTED_MODULE_0__playeranims__["a" /* playerAnims */].DIR_ENUM.S;
            case __WEBPACK_IMPORTED_MODULE_0__playeranims__["a" /* playerAnims */].DIR_ENUM.S:
                return __WEBPACK_IMPORTED_MODULE_0__playeranims__["a" /* playerAnims */].DIR_ENUM.W;
            case __WEBPACK_IMPORTED_MODULE_0__playeranims__["a" /* playerAnims */].DIR_ENUM.W:
                return __WEBPACK_IMPORTED_MODULE_0__playeranims__["a" /* playerAnims */].DIR_ENUM.N;
            case __WEBPACK_IMPORTED_MODULE_0__playeranims__["a" /* playerAnims */].DIR_ENUM.N:
                return __WEBPACK_IMPORTED_MODULE_0__playeranims__["a" /* playerAnims */].DIR_ENUM.E;
        }
    },
    notDone: function (callback) {
        var self = this;
        if (self.result == self.mazeData.ResultType.UNSET) {
            callback();
        }
        self.schedulePlayAction(cc.callFunc(function () {
            if (self.result == self.mazeData.ResultType.UNSET) {
                self.notDone(callback);
            }
        }));
    },
    isPathForward: function () {
        var squareIdx = this.getSquareIdx();
        var dirVector = this.moveDir[this.currentDir];
        dirVector.y = -dirVector.y;
        var forwardIdx = cc.pAdd(squareIdx, cc.p(dirVector.y, dirVector.x));
        if (this.mazeData.MAP[forwardIdx.x][forwardIdx.y] == this.mazeData.SquareType.WALL) {
            return false;
        }
        else {
            return true;
        }
    },
    isPathLeft: function () {
        var squareIdx = this.getSquareIdx();
        var dirVector = this.moveDir[this.getTurnLeftDir()];
        dirVector.y = -dirVector.y;
        var leftIdx = cc.pAdd(squareIdx, cc.p(dirVector.y, dirVector.x));
        if (this.mazeData.MAP[leftIdx.x][leftIdx.y] == this.mazeData.SquareType.WALL) {
            return false;
        }
        else {
            return true;
        }
    },
    isPathRight: function () {
        var squareIdx = this.getSquareIdx();
        var dirVector = this.moveDir[this.getTurnRightDir()];
        dirVector.y = -dirVector.y;
        var rightIdx = cc.pAdd(squareIdx, cc.p(dirVector.y, dirVector.x));
        if (this.mazeData.MAP[rightIdx.x][rightIdx.y] == this.mazeData.SquareType.WALL) {
            return false;
        }
        else {
            return true;
        }
    },
    schedulePlayAction: function (action) {
        var self = this;
        if (self.playingAction != null) {
            self.pendingActions.push(action);
            return;
        }
        self.playingAction = action;
        self.runAction(cc.sequence([
            action,
            cc.callFunc(self.schedulePlayActionCB, self)
        ]));
    },
    clearPendingActions: function () {
        this.pendingActions = [];
    },
    stopPlayingAction: function () {
        this.stopAllActions();
        this.playingAction = null;
    },
    schedulePlayActionCB: function () {
        var self = this;
        self.playingAction = null;
        if (self.pendingActions.length > 0) {
            self.schedulePlayAction(self.pendingActions.shift());
        }
    },
    playAction: function (action) {
        this.runAction(action);
    },
    checkWin: function () {
        var squareIdx = this.getSquareIdx();
        if (this.mazeData.MAP[squareIdx.x][squareIdx.y] == this.mazeData.SquareType.FINISH) {
            return true;
        }
        return false;
    },
    checkFail: function () {
        var squareIdx = this.getSquareIdx();
        if (this.mazeData.MAP[squareIdx.x][squareIdx.y] == this.mazeData.SquareType.WALL) {
            return true;
        }
        return false;
    },
    getSquareIdx: function () {
        var pos = this.getPosition();
        var x = Math.round(pos.x / this.mazeData.SQUARE_SIZE);
        var y = Math.round(pos.y / this.mazeData.SQUARE_SIZE);
        return cc.p(this.mazeData.ROWS - y - 1, x);
    }
});

//# sourceMappingURL=player.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return playerAnims; });
var playerAnims = {
    animInterval: 0.05,
    animates: {},
    ANIMATE_ENUM: {
        E2N: 0,
        E2S: 1,
        S2E: 2,
        S2W: 3,
        W2S: 4,
        W2N: 5,
        N2W: 6,
        N2E: 7,
        IDLE: 8,
        CHEER: 9,
    },
    DIR_ENUM: {
        E: 0,
        S: 1,
        W: 2,
        N: 3,
        NONE: 4,
    },
    mazeData: null,
    init: function (mazeData) {
        this.mazeData = mazeData;
        this.loadSpriteFrames();
        this.constructAnimations();
    },
    loadSpriteFrames: function () {
        for (var i = 0; i < 21; ++i) {
            cc.spriteFrameCache.addSpriteFrame(cc.SpriteFrame.create(this.mazeData.SKIN.sprite, cc.rect(i * this.mazeData.PEGMAN_WIDTH, 0 * this.mazeData.PEGMAN_HEIGHT, this.mazeData.PEGMAN_WIDTH, this.mazeData.PEGMAN_HEIGHT)), this.playerFrameName(i));
        }
    },
    constructAnimations: function () {
        // E2N
        var e2nAnimation = cc.Animation.create([
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(4)),
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(3)),
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(2)),
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(1)),
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(0)),
        ], this.animInterval);
        this.animates[this.ANIMATE_ENUM.E2N] = cc.Animate.create(e2nAnimation);
        // E2S
        var e2sAnimation = cc.Animation.create([
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(4)),
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(5)),
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(6)),
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(7)),
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(8)),
        ], this.animInterval);
        this.animates[this.ANIMATE_ENUM.E2S] = cc.Animate.create(e2sAnimation);
        // S2E
        var s2eAnimation = cc.Animation.create([
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(8)),
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(7)),
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(6)),
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(5)),
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(4)),
        ], this.animInterval);
        this.animates[this.ANIMATE_ENUM.S2E] = cc.Animate.create(s2eAnimation);
        // S2W
        var s2wAnimation = cc.Animation.create([
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(8)),
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(9)),
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(10)),
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(11)),
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(12)),
        ], this.animInterval);
        this.animates[this.ANIMATE_ENUM.S2W] = cc.Animate.create(s2wAnimation);
        // W2S
        var w2sAnimation = cc.Animation.create([
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(12)),
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(11)),
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(10)),
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(9)),
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(8)),
        ], this.animInterval);
        this.animates[this.ANIMATE_ENUM.W2S] = cc.Animate.create(w2sAnimation);
        // W2N
        var w2nAnimation = cc.Animation.create([
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(12)),
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(13)),
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(14)),
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(15)),
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(0)),
        ], this.animInterval);
        this.animates[this.ANIMATE_ENUM.W2N] = cc.Animate.create(w2nAnimation);
        // N2W
        var n2wAnimation = cc.Animation.create([
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(0)),
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(15)),
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(14)),
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(13)),
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(12)),
        ], this.animInterval);
        this.animates[this.ANIMATE_ENUM.N2W] = cc.Animate.create(n2wAnimation);
        // N2E
        var n2eAnimation = cc.Animation.create([
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(0)),
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(1)),
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(2)),
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(3)),
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(4)),
        ], this.animInterval);
        this.animates[this.ANIMATE_ENUM.N2E] = cc.Animate.create(n2eAnimation);
        // idle
        var idleAnimation = cc.Animation.create([
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(20)),
        ], this.animInterval);
        this.animates[this.ANIMATE_ENUM.IDLE] = cc.Animate.create(idleAnimation);
        // cheer
        var cheerAnimation = cc.Animation.create([
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(16)),
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(17)),
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(18)),
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(19)),
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(16)),
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(17)),
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(18)),
            cc.spriteFrameCache.getSpriteFrame(this.playerFrameName(19)),
        ], this.animInterval);
        cheerAnimation.setRestoreOriginalFrame(this.playerFrameName(20));
        this.animates[this.ANIMATE_ENUM.CHEER] = cc.Animate.create(cheerAnimation);
    },
    playerFrameName: function (index) {
        return this.mazeData.SKIN.sprite + "_" + index;
    },
    currentDirTurnLAnimIndex: function (currentDir) {
        switch (currentDir) {
            case this.DIR_ENUM.E:
                return this.ANIMATE_ENUM.E2N;
            case this.DIR_ENUM.S:
                return this.ANIMATE_ENUM.S2E;
            case this.DIR_ENUM.W:
                return this.ANIMATE_ENUM.W2S;
            case this.DIR_ENUM.N:
                return this.ANIMATE_ENUM.N2W;
        }
    },
    currentDirTurnRAnimIndex: function (currentDir) {
        switch (currentDir) {
            case this.DIR_ENUM.E:
                return this.ANIMATE_ENUM.E2S;
            case this.DIR_ENUM.S:
                return this.ANIMATE_ENUM.S2W;
            case this.DIR_ENUM.W:
                return this.ANIMATE_ENUM.W2N;
            case this.DIR_ENUM.N:
                return this.ANIMATE_ENUM.N2E;
        }
    },
    getAnim: function (index) {
        return this.animates[index];
    },
    getTurnLAnim: function (currentDir) {
        return this.getAnim(this.currentDirTurnLAnimIndex(currentDir));
    },
    getTurnRAnim: function (currentDir) {
        return this.getAnim(this.currentDirTurnRAnimIndex(currentDir));
    },
};

//# sourceMappingURL=playeranims.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Blockpro; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mazeblocks__ = __webpack_require__(268);

var Blockpro = (function () {
    function Blockpro() {
    }
    Blockpro.prototype.init = function (ba, bd, md) {
        this.blocklyArea = ba;
        this.blocklyDiv = bd;
        this.mazeData = md;
        this.mazeBlocks = new __WEBPACK_IMPORTED_MODULE_0__mazeblocks__["a" /* MazeBlocks */]();
        this.mazeBlocks.init(this.mazeData);
        var toolbox_cfg = this.mazeData.TOOLBOX;
        this.boocklyWorksapce = Blockly.inject(this.blocklyDiv.nativeElement, {
            media: 'thirdparty/blockly/media/',
            toolbox: toolbox_cfg
        });
        Blockly.svgResize(this.boocklyWorksapce);
    };
    Blockpro.prototype.reset = function () {
        this.boocklyWorksapce.updateToolbox(this.mazeData.TOOLBOX);
    };
    Blockpro.prototype.run = function () {
        var code = Blockly.JavaScript.workspaceToCode(this.boocklyWorksapce);
        console.log(code);
        eval(code);
    };
    return Blockpro;
}());

//# sourceMappingURL=blockpro.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MazeBlocks; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__provider_messages__ = __webpack_require__(269);

/**
 * @fileoverview Blocks for Blockly's Maze application.
 * @author fraser@google.com (Neil Fraser)
 */
var MazeBlocks = (function () {
    function MazeBlocks() {
        /**
         * Common HSV hue for all movement blocks.
         */
        this.MOVEMENT_HUE = 290;
        /**
         * HSV hue for loop block.
         */
        this.LOOPS_HUE = 120;
        /**
         * Common HSV hue for all logic blocks.
         */
        this.LOGIC_HUE = 210;
        /**
         * Left turn arrow to be appended to messages.
         */
        this.LEFT_TURN = ' \u21BA';
        /**
         * Left turn arrow to be appended to messages.
         */
        this.RIGHT_TURN = ' \u21BB';
    }
    // Extensions to Blockly's language and JavaScript generator.
    MazeBlocks.prototype.init = function (mazeData) {
        var self = this;
        self.mazeData = mazeData;
        Blockly.Blocks['maze_moveForward'] = {
            /**
             * Block for moving forward.
             * @this Blockly.Block
             */
            init: function () {
                this.jsonInit({
                    "message0": __WEBPACK_IMPORTED_MODULE_0__provider_messages__["a" /* Messages */].getMsg('Maze_moveForward'),
                    "previousStatement": null,
                    "nextStatement": null,
                    "colour": self.MOVEMENT_HUE,
                    "tooltip": __WEBPACK_IMPORTED_MODULE_0__provider_messages__["a" /* Messages */].getMsg('Maze_moveForwardTooltip')
                });
            }
        };
        Blockly.JavaScript['maze_moveForward'] = function (block) {
            // Generate JavaScript for moving forward.
            return 'maze_player.moveForward(\'block_id_' + block.id + '\');\n';
        };
        Blockly.Blocks['maze_turn'] = {
            /**
             * Block for turning left or right.
             * @this Blockly.Block
             */
            init: function () {
                var DIRECTIONS = [[__WEBPACK_IMPORTED_MODULE_0__provider_messages__["a" /* Messages */].getMsg('Maze_turnLeft'), 'turnLeft'],
                    [__WEBPACK_IMPORTED_MODULE_0__provider_messages__["a" /* Messages */].getMsg('Maze_turnRight'), 'turnRight']];
                // Append arrows to direction messages.
                DIRECTIONS[0][0] += self.LEFT_TURN;
                DIRECTIONS[1][0] += self.RIGHT_TURN;
                this.setColour(self.MOVEMENT_HUE);
                this.appendDummyInput()
                    .appendField(new Blockly.FieldDropdown(DIRECTIONS), 'DIR');
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(__WEBPACK_IMPORTED_MODULE_0__provider_messages__["a" /* Messages */].getMsg('Maze_turnTooltip'));
            }
        };
        Blockly.JavaScript['maze_turn'] = function (block) {
            // Generate JavaScript for turning left or right.
            var dir = block.getFieldValue('DIR');
            return 'maze_player.' + dir + '(\'block_id_' + block.id + '\');\n';
        };
        Blockly.Blocks['maze_if'] = {
            /**
             * Block for 'if' conditional if there is a path.
             * @this Blockly.Block
             */
            init: function () {
                var DIRECTIONS = [[__WEBPACK_IMPORTED_MODULE_0__provider_messages__["a" /* Messages */].getMsg('Maze_pathAhead'), 'maze_player.isPathForward'],
                    [__WEBPACK_IMPORTED_MODULE_0__provider_messages__["a" /* Messages */].getMsg('Maze_pathLeft'), 'maze_player.isPathLeft'],
                    [__WEBPACK_IMPORTED_MODULE_0__provider_messages__["a" /* Messages */].getMsg('Maze_pathRight'), 'maze_player.isPathRight']];
                // Append arrows to direction messages.
                DIRECTIONS[1][0] += self.LEFT_TURN;
                DIRECTIONS[2][0] += self.RIGHT_TURN;
                this.setColour(self.LOGIC_HUE);
                this.appendDummyInput()
                    .appendField(new Blockly.FieldDropdown(DIRECTIONS), 'DIR');
                this.appendStatementInput('DO')
                    .appendField(__WEBPACK_IMPORTED_MODULE_0__provider_messages__["a" /* Messages */].getMsg('Maze_doCode'));
                this.setTooltip(__WEBPACK_IMPORTED_MODULE_0__provider_messages__["a" /* Messages */].getMsg('Maze_ifTooltip'));
                this.setPreviousStatement(true);
                this.setNextStatement(true);
            }
        };
        Blockly.JavaScript['maze_if'] = function (block) {
            // Generate JavaScript for 'if' conditional if there is a path.
            var argument = block.getFieldValue('DIR') +
                '(\'block_id_' + block.id + '\')';
            var branch = Blockly.JavaScript.statementToCode(block, 'DO');
            var code = 'if (' + argument + ') {\n' + branch + '}\n';
            return code;
        };
        Blockly.Blocks['maze_ifElse'] = {
            /**
             * Block for 'if/else' conditional if there is a path.
             * @this Blockly.Block
             */
            init: function () {
                var DIRECTIONS = [[__WEBPACK_IMPORTED_MODULE_0__provider_messages__["a" /* Messages */].getMsg('Maze_pathAhead'), 'maze_player.isPathForward'],
                    [__WEBPACK_IMPORTED_MODULE_0__provider_messages__["a" /* Messages */].getMsg('Maze_pathLeft'), 'maze_player.isPathLeft'],
                    [__WEBPACK_IMPORTED_MODULE_0__provider_messages__["a" /* Messages */].getMsg('Maze_pathRight'), 'maze_player.isPathRight']];
                // Append arrows to direction messages.
                DIRECTIONS[1][0] += self.LEFT_TURN;
                DIRECTIONS[2][0] += self.RIGHT_TURN;
                this.setColour(self.LOGIC_HUE);
                this.appendDummyInput()
                    .appendField(new Blockly.FieldDropdown(DIRECTIONS), 'DIR');
                this.appendStatementInput('DO')
                    .appendField(__WEBPACK_IMPORTED_MODULE_0__provider_messages__["a" /* Messages */].getMsg('Maze_doCode'));
                this.appendStatementInput('ELSE')
                    .appendField(__WEBPACK_IMPORTED_MODULE_0__provider_messages__["a" /* Messages */].getMsg('Maze_elseCode'));
                this.setTooltip(__WEBPACK_IMPORTED_MODULE_0__provider_messages__["a" /* Messages */].getMsg('Maze_ifelseTooltip'));
                this.setPreviousStatement(true);
                this.setNextStatement(true);
            }
        };
        Blockly.JavaScript['maze_ifElse'] = function (block) {
            // Generate JavaScript for 'if/else' conditional if there is a path.
            var argument = block.getFieldValue('DIR') +
                '(\'block_id_' + block.id + '\')';
            var branch0 = Blockly.JavaScript.statementToCode(block, 'DO');
            var branch1 = Blockly.JavaScript.statementToCode(block, 'ELSE');
            var code = 'if (' + argument + ') {\n' + branch0 +
                '} else {\n' + branch1 + '}\n';
            return code;
        };
        Blockly.Blocks['maze_forever'] = {
            /**
             * Block for repeat loop.
             * @this Blockly.Block
             */
            init: function () {
                this.setColour(self.LOOPS_HUE);
                this.appendDummyInput()
                    .appendField(__WEBPACK_IMPORTED_MODULE_0__provider_messages__["a" /* Messages */].getMsg('Maze_repeatUntil'))
                    .appendField(new Blockly.FieldImage('assets/' + self.mazeData.SKIN.marker, 12, 16));
                this.appendStatementInput('DO')
                    .appendField(__WEBPACK_IMPORTED_MODULE_0__provider_messages__["a" /* Messages */].getMsg('Maze_doCode'));
                this.setPreviousStatement(true);
                this.setTooltip(__WEBPACK_IMPORTED_MODULE_0__provider_messages__["a" /* Messages */].getMsg('Maze_whileTooltip'));
            }
        };
        Blockly.JavaScript['maze_forever'] = function (block) {
            // Generate JavaScript for repeat loop.
            var branch = Blockly.JavaScript.statementToCode(block, 'DO');
            if (Blockly.JavaScript.INFINITE_LOOP_TRAP) {
                branch = Blockly.JavaScript.INFINITE_LOOP_TRAP.replace(/%1/g, '\'block_id_' + block.id + '\'') + branch;
            }
            return 'maze_player.notDone(function() {' +
                branch +
                '})\n';
        };
    };
    return MazeBlocks;
}());

//# sourceMappingURL=mazeblocks.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Messages; });
// temp i18n solution
var Messages = (function () {
    function Messages() {
    }
    Messages.getMsg = function (key) {
        if (this.en[key] == null) {
            return "unknown text";
        }
        return this.en[key];
    };
    return Messages;
}());

Messages.en = {
    "Games_name": "Blockly Games",
    "Games_puzzle": "Puzzle",
    "Games_maze": "Maze",
    "Games_bird": "Bird",
    "Games_turtle": "Turtle",
    "Games_movie": "Movie",
    "Games_pondTutor": "Pond Tutor",
    "Games_pond": "Pond",
    "Games_linesOfCode1": "You solved this level with 1 line of JavaScript:",
    "Games_linesOfCode2": "You solved this level with %1 lines of JavaScript:",
    "Games_nextLevel": "Are you ready for level %1?",
    "Games_finalLevel": "Are you ready for the next challenge?",
    "Games_linkTooltip": "Save and link to blocks.",
    "Games_runTooltip": "Run the program you wrote.",
    "Games_runProgram": "Run Program",
    "Games_resetTooltip": "Stop the program and reset the level.",
    "Games_resetProgram": "Reset",
    "Games_help": "Help",
    "Games_dialogOk": "OK",
    "Games_dialogCancel": "Cancel",
    "Games_catLogic": "Logic",
    "Games_catLoops": "Loops",
    "Games_catMath": "Math",
    "Games_catText": "Text",
    "Games_catLists": "Lists",
    "Games_catColour": "Colour",
    "Games_catVariables": "Variables",
    "Games_catProcedures": "Functions",
    "Games_httpRequestError": "There was a problem with the request.",
    "Games_linkAlert": "Share your blocks with this link:%1",
    "Games_hashError": "Sorry, '%1' does not correspond with any saved program.",
    "Games_xmlError": "Could not load your saved file. Perhaps it was created with a different version of Blockly?",
    "Games_listVariable": "list",
    "Games_textVariable": "text",
    "Maze_moveForward": "move forward",
    "Maze_turnLeft": "turn left",
    "Maze_turnRight": "turn right",
    "Maze_doCode": "do",
    "Maze_elseCode": "else",
    "Maze_helpIfElse": "If-else blocks will do one thing or the other.",
    "Maze_pathAhead": "if path ahead",
    "Maze_pathLeft": "if path to the left",
    "Maze_pathRight": "if path to the right",
    "Maze_repeatUntil": "repeat until",
    "Maze_moveForwardTooltip": "Moves the player forward one space.",
    "Maze_turnTooltip": "Turns the player left or right by 90 degrees.",
    "Maze_ifTooltip": "If there is a path in the specified direction, \nthen do some actions. ",
    "Maze_ifelseTooltip": "If there is a path in the specified direction, \nthen do the first block of actions. \nOtherwise, do the second block of actions. ",
    "Maze_whileTooltip": "Repeat the enclosed actions until finish point \nis reached. ",
    "Maze_capacity0": "You have %0 blocks left.",
    "Maze_capacity1": "You have %1 block left.",
    "Maze_capacity2": "You have %2 blocks left.",
};
//# sourceMappingURL=messages.js.map

/***/ })

},[194]);
//# sourceMappingURL=main.js.map