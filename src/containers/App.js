"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var CardList_1 = require("../components/CardList");
var SearchBox_1 = require("../components/SearchBox");
var Scroll_1 = require("../components/Scroll");
require("./App.css");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.onSearchChange = function (event) {
            _this.setState({ searchfield: event.currentTarget.value });
        };
        _this.state = {
            robots: [],
            searchfield: ''
        };
        return _this;
    }
    App.prototype.componentDidMount = function () {
        var _this = this;
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(function (response) { return response.json(); })
            .then(function (users) { _this.setState({ robots: users }); });
    };
    App.prototype.render = function () {
        var _a = this.state, robots = _a.robots, searchfield = _a.searchfield;
        var filteredRobots = robots.filter(function (robot) {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        return !robots.length ?
            <h1>Loading</h1> :
            (<div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox_1["default"] searchChange={this.onSearchChange}/>
          <Scroll_1["default"]>
            <CardList_1["default"] robots={filteredRobots}/>
          </Scroll_1["default"]>
        </div>);
    };
    return App;
}(React.Component));
exports["default"] = App;
