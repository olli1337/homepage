import React from 'react';
import { XTerm } from 'xterm-for-react'

class Console extends React.Component {
    constructor() {
        super();
        this.xtermRef = React.createRef()
        this.state = {
            input: "",
            shellPrompt: '$'
        }
    }

    componentDidMount() {
        this.resetConsole();
    }

    resetConsole() {
        this.xtermRef.current.terminal.reset();   
        this.xtermRef.current.terminal.setOption('theme', {foreground: '#4AF626', cursor: '#4AF626'});
        this.xtermRef.current.terminal.writeln('Olli OS 0.02');
        this.xtermRef.current.terminal.writeln('Hello, stranger! Type "help" to view the available commands');
        this.xtermRef.current.terminal.write('$ ');
    }

    parseInputOnEnterKey() {

        switch(this.state.input){
            case "help":
                this.printAfterParse('\r\nYou can ask for skills, hobbies, interests, projects, meme or "clear" the screen \r\n')
            break;
            case 'clear':
                this.resetConsole();
            break;
            default:
                this.printAfterParse("\r\nUnknown command: '" + this.state.input +  "'\r\n")
            break;
        }
    }

    printAfterParse(message) {
        this.xtermRef.current.terminal.write(message);
        this.xtermRef.current.terminal.write("$ ");
        this.setState({input: ""})
    }

    render() {
        return ( 
               <XTerm
            ref={this.xtermRef}
            onData={(data) => {
                const code = data.charCodeAt(0);
                if (code === 127) {
                    console.log("backspace");
                    this.setState({input: this.state.input.slice(0, -1)})
                    this.xtermRef.current.terminal.write('\x1b[2K\r');
                    this.xtermRef.current.terminal.write('$ ' + this.state.input);
                }
                else if (code === 13 && this.state.input.length > 0) {
                    this.parseInputOnEnterKey();
                } 
                else if (code < 32) { // Disable control Keys such as arrow keys
                    return;
                } 
                else { 
                    this.xtermRef.current.terminal.write(data);
                    this.setState({input: this.state.input + data})
                }
            }}
        />
        )
    }
}

export default Console;
