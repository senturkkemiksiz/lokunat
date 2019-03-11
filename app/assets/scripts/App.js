//var Person = require('./modules/Person');
import Person from './modules/Person';

class Adult extends Person {
	payTaxes() {
		console.log(this.name + " now owes me");
	}
}

var John = new Person("John", "blue");
John.greet();

var Jane = new Adult("Jane", "Green");
Jane.payTaxes();
