export class AwesomeParserTDD {
	parse(input? : string | null){
		input = input || '';
		if(input.length === 0) {
			return {};
		}
		let parts = input.split('__TITLE__');
		if(parts.length === 3) {
			return {
				title: parts[1]
			}
		}
		return {
			extras: parts
		}
	}
}
