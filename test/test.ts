import * as chai from 'chai';

import {AwesomeParserTDD} from "../src/parser";

const expect = chai.expect;

describe('Awesome parser tests built with TDD methodology', function () {
	it('expect no input to return {}', function (){
		let parser = new AwesomeParserTDD();
		let result = parser.parse();
		expect(result).to.be.empty;
	});

	it('expect null input to return {}', function() {
		let parser = new AwesomeParserTDD();
		let result = parser.parse(null);
		expect(result).to.be.empty;
	});

	it('expect empty string input to return {}', function() {
		let parser = new AwesomeParserTDD();
		let result = parser.parse('');
		expect(result).to.be.empty;
	});

	it('expect parsing a title from string', function() {
		let parser = new AwesomeParserTDD();
		let result = parser.parse('__TITLE__Awesome parser do nothing__TITLE__');
		expect(result).to.deep.equal({
			title: "Awesome parser do nothing"
		});
	});

	it('expect general string to get into the extras property', function() {
		let parser = new AwesomeParserTDD();
		let result = parser.parse('This is a general string without any known entity');
		expect(result).to.deep.equal({
			extras: ["This is a general string without any known entity"]
		});
	});

	it('expect parsing extras due to none closed title', function() {
		let parser = new AwesomeParserTDD();
		let result = parser.parse('__TITLE__it will not have suffix and goes to extras');
		expect(result).to.deep.equal({
			extras: [
				"__TITLE__it will not have suffix and goes to extras"
			]
		});
	});

	it('expect parsing extras due to none opened title', function() {
		let parser = new AwesomeParserTDD();
		let result = parser.parse('it will not have suffix and goes to extras__TITLE__');
		expect(result).to.deep.equal({
			extras: [
				"it will not have suffix and goes to extras__TITLE__"
			]
		});
	});

	it('expect parsing multiple titles to use only the first one as title', function() {
		let parser = new AwesomeParserTDD();
		let result = parser.parse('__TITLE__real title__TITLE____TITLE__go to extras__TITLE__');
		expect(result).to.deep.equal({
			title: "real title",
			extras: [
				"__TITLE__go to extras__TITLE__"
			]
		});
	});

	it('expect parsing multiple titles to use only the first one as title 2', function() {
		let parser = new AwesomeParserTDD();
		let result = parser.parse('Some prefix __TITLE__real title__TITLE__and middle__TITLE__go to extras__TITLE__');
		expect(result).to.deep.equal({
			title: "real title",
			extras: [
				"Some prefix ",
				"and middle__TITLE__go to extras__TITLE__"
			]
		});
	});

});
