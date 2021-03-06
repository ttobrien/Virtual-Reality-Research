import React from 'react';

const State = {
  counter: 0,
  i: 0,
  j: 0,
  k: 0,
  var1: false,
  var2: false,
  var3: false,
  var4: false,
  var5: false,
  var6: false
}

const listeners = new Set();

function updateComponents() {
	for (const cb of listeners.values()) {
		cb();
	}
}



export function changeState(newState) {
	let currState = newState;

	if(currState == 0) {
		if(State.counter - 1 >= 0)
		{
			State.counter = State.counter - 1;
		}

		if(State.counter <= 7) {
			State.i = 0;
		} else if(State.counter <= 10) {
			State.i = 1;
		}
		  
		if(State.counter <= 8) {
			State.j = 0;
		} else if(State.counter <= 10) {
			State.j = 1;
		}

		if(State.counter < 1) {
			State.var1 = false;
		}

		if(State.counter < 2) {
			State.var2 = false;
		}

		if(State.counter < 3) {
			State.var3 = false;
		}

		if(State.counter < 4) {
			State.var4 = false;
		}

		if(State.counter < 5) {
			State.var5 = false;
		}

		if(State.counter < 17) {
			State.var6 = false;
		}

	} else if (currState == 1) {
		if(State.counter + 1 <= 27)
		{
			State.counter = State.counter + 1;
		}

		if(State.counter <= 7) {
			State.i = 0;
		} else if(State.counter <= 10) {
			State.i = 1;
		}
		  
		if(State.counter <= 8) {
			State.j = 0;
		} else if(State.counter <= 10) {
			State.j = 1;
		}
		if(State.counter >= 16) {
			State.var5 = false;
		}

		if(State.counter >= 25) {
			State.var6 = false;
		}

	} else if(currState == 2) {
		State.var1 = !State.var1;
	} else if(currState == 3) {
		State.var2 = !State.var2;
	} else if(currState == 4) {
		State.var3 = !State.var3;
	} else if(currState == 5) {
		State.var4 = !State.var4;
	} else if(currState == 6) {
		State.var5 = !State.var5;
	} else if(currState == 7) {
		State.var6 = !State.var6;
	}

	updateComponents();
}

export function connect(Component) {
	return class Wrapper extends React.Component {
		state = {
			counter: State.counter,
  			i: State.i,
  			j: State.j,
  			k: State.k,
  			var1: State.var1,
  			var2: State.var2,
  			var3: State.var3,
  			var4: State.var4,
  			var5: State.var5,
  			var6: State.var6,
  			
		}

		_listener = () => {
			this.setState({
				counter: State.counter,
  				i: State.i,
  				j: State.j,
  				k: State.k,
  				var1: State.var1,
  				var2: State.var2,
  				var3: State.var3,
  				var4: State.var4,
  				var5: State.var5,
  				var6: State.var6,
			})
		}

		componentDidMount() {
			listeners.add(this._listener);
		}

		render() {
			return(
				<Component
				{...this.props}
				counter={this.state.counter}
				i={this.state.i}
				j={this.state.j}
				k={this.state.k}
				var1={this.state.var1}
				var2={this.state.var2}
				var3={this.state.var3}
				var4={this.state.var4}
				var5={this.state.var5}
				var6={this.state.var6}
				/>
			)
		}
	}
}
