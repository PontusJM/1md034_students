const vm = new Vue({
	el: '#myID',
  data: {
	  menu: food,
	  fullname: null,
	  email: null ,
	  street: null ,
	  apartment: null ,
	  recipient: null ,
	  selectedGender: null,
	  selectedBurger: null,
	  confirmedBurgers: null
  },
  methods: {
	  submit: function(fullname, email, street, apartment, recipient, selectedGender, selectedBurger){
		let selectedBurgers = this.getBurgers();
			let data = [fullname,email,street,apartment,recipient,selectedGender,selectedBurgers]
		this.confirmedBurgers = selectedBurgers;
		console.log(data);
		return data;
		},
		getBurgers: function(){
			let burgers = document.getElementsByName('burgerSelect');
			var selectedBurgers= [];
			for(var burger of burgers){
				if(burger.checked){
					selectedBurgers.push(burger.value);
				}
			}
			return selectedBurgers;
		}
  }
})