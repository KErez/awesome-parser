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

});
