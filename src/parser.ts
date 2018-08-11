interface ObjectStructure {
	title?: String;
	extras?: Array<String>;
}

export class AwesomeParserTDD {
	parse(input? : string | null){
		input = input || '';
		if(input.length === 0) {
			return {};
		}

		//We only handle title and extras at this point so naive indexOf is enough
		let token = '__TITLE__';
		let results:ObjectStructure = {};
		let extras:Array<String> = [];
		let start = input.indexOf(token);
		let end = input.indexOf(token, start + 1);
		if(end > start) {
			//we have real title
			results.title = input.substring(start + token.length, end);
			start>0 ? extras.push(input.substring(0, start)):null;
			end+token.length<input.length ? extras.push(input.substring(end + token.length)): null;
			extras.length > 0 ? results.extras = extras: null;
		} else {
			results.extras = [input];
		}

		return results;
	}
}
