export function customLog() {
let customLog_str: string = `
/*
==============================
CUSTOM CONSOLE.LOG
==============================
*/

export	class LogInput {
	developEnvi: boolean;
	
	constructor(developEnvi: boolean) {
		// code...
		this.developEnvi = developEnvi;
	}
	log(input: any) {
		if(this.developEnvi) {
  			console.log(\`%custom-log = \`, 'color: green', input);
		}else {
		 	return;
		}
	}
}`;

return customLog_str;
}