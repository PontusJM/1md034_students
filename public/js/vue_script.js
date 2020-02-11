'use strict';
const socket = io();

const vm = new Vue({
	el: '#myID',
  data: {
		menu: food,
		order: {details: {x: 0, y: 0}},
		orders: {},
		submitted: false,
	  fullname: null,
	  email: null ,
	  recipient: 'Visa/Mastercard' ,
	  selectedGender: 'male',
	  selectedBurger: null,
    confirmedBurgers: null,
    lastOrder: 0
	},
  methods: {
	  submit: function(){
		let selectedBurgers = this.getBurgers();
		this.submitted = true;
		let data = [this.fullname,this.email,this.recipient,this.selectedGender,this.selectedBurgers]
		this.confirmedBurgers = selectedBurgers;
		this.addOrder()
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
		},
		getNext: function() {
      /* This function returns the next available key (order number) in
       * the orders object, it works under the assumptions that all keys
       * are integers. */
      this.lastOrder++;
      return this.lastOrder;
    },
    addOrder: function() {
      /* When you click in the map, a click event object is sent as parameter
       * to the function designated in v-on:click (i.e. this one).
       * The click event object contains among other things different
       * coordinates that we need when calculating where in the map the click
       * actually happened. */
      socket.emit('addOrder', {
        orderId: this.getNext(),
        details: {
          x: this.order.details.x,
          y: this.order.details.y
        },
        orderItems: this.confirmedBurgers,
      });
		},
		displayOrder: function(event) {
      let offset = {
        x: event.currentTarget.getBoundingClientRect().left,
        y: event.currentTarget.getBoundingClientRect().top,
			};
			this.order.details = {x: event.clientX - 10 - offset.x, y: event.clientY - 10 - offset.y}
		}
	}
})