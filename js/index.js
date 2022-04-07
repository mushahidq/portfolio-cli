var banner=`<div class="portfolio-banner">
                           **     ****           ** **                  ******   **       **
 ******                   /**    /**/           /**//                  **////** /**      /**
/**///**  ******  ****** ****** ******  ******  /** **  ******        **    //  /**      /**
/**  /** **////**//**//*///**/ ///**/  **////** /**/** **////** *****/**        /**      /**
/****** /**   /** /** /   /**    /**  /**   /** /**/**/**   /**///// /**        /**      /**
/**///  /**   /** /**     /**    /**  /**   /** /**/**/**   /**      //**    ** /**      /**
/**     //****** /***     //**   /**  //******  ***/**//******        //******  /********/**
//       //////  ///       //    //    //////  /// //  //////          //////   //////// //                                  
            
</div>`;
var path = "";
var skills = "java\t\tjavascript\t\tpython\t\tc\t\tc\+\+\t\tc#\t\truby-on-rails\t\tnode.js\t\tunity\t\texpress.js\t\tflask\t\tCOBOL\t\tarduino";
var education = "I'm currently in my final year of Bachelor of Engineering in Computer Science and Engineering at The Maharaja Sayajirao University of Baroda. My coursework includs Computer Networks, Network Programming, Linux, Operating Systems, Microprocessor Architecture and Computer Graphics among other things.";
var about = "I'm Mohammed Mushahid Qureshi from Vadodara, Gujarat, India. I'm a Training and Placement Coordinator at FTE, MSU and a Cyber Security Research Intern at Forenzy Networks. I like working with new technologies and projects that constantly challenge my abilities.";
var socials = "Note: These provide links to my social media.\n<a target=\"_blank\" class=\"contact\" href=\"mailto:mushahidq@gmail.com\">email</a>\t\t<a target=\"_blank\" class=\"contact\" href=\"https://github.com/mushahidq\">github</a>\t\t<a target=\"_blank\" class=\"contact\" href=\"https://twitter.com/mushahidq\">twitter</a>\t\t<a target=\"_blank\" class=\"contact\" href=\"https://www.linkedin.com/in/mushahidq\">linkedin</a>\t\t<a target=\"_blank\" class=\"contact\" href=\"https://www.facebook.com/mushahidq\">facebook</a>\t\t<a target=\"_blank\" class=\"contact\" href=\"https://www.instagram.com/mmushahidq\">instagram</a>\t\t<a target=\"_blank\" class=\"contact\" href=\"https://devpost.com/mushahidq\">devpost</a>";
var experience = "Forenzy Networks, Vadodara - Security Research Intern\nAUG 2021 - PRESENT\nWorking on security research involving web-application penetration testing, network penetration testing, OWASP Top 10, system penetration testing and networking and also development of security software including a honeypot and other vulnerability scanning and assessment tools."
var certifications = "Master the Mainframe, IBM - Coursework included IBM z/OS mainframe, REXX, COBOL, ANSIBLE, Python, Zowe, Z Open Automation Utilities etc.\n\nFrom Data to Insights with Google Cloud - Exploring and Preparing your Data with BigQuery, Creating New BigQuery Datasets and Visualizing Insights, Achieving Advanced Insights with BigQuery, Applying Machine Learning to your Data with GCP"

var home_ = [
    {
        name: "about",
        value: about
    },
    {
        name: "certifications",
        value: certifications
    },
    {
        name: "education",
        value: education
    },
    {
        name: "experience",
        value: experience
    },
    {
        name: "projects",
        value: projects,
        type: "dir"
    },
    {
        name: "skills",
        value: skills
    },
    {
        name: "socials",
        value: socials
    }
];
var projects = [
    {
        name: "file_cabinet",
        description: "This is a basic web application to store documents made using ruby on rails",
        technologies: "ruby, rails, haml",
        link: "https://github.com/mushahidq/ror_fileCabinet"
    },
    {
        name: "cpp_keylogger",
        description: "A simple keylogger for windows created in C++",
        technologies: "c++",
        link: "https://github.com/mushahidq/cpp_win_keylogger"
    },
    {
        name: "in_the_snow",
        description: "Just a fun snowboarding game built with p5.js",
        technologies: "js, p5.js, ml5.js",
        link: "https://github.com/mushahidq/in_the_snow"
    },
    {
        name: "SpreadTheCheer",
        description: "Simple web application allows user to send a message into the cloud full of happiness and cheer",
        technologies: "java, spring boot",
        link: "https://github.com/mushahidq/SpreadTheCheer"
    },
    {
        name: "py_colour_identifier",
        description: "Identify most used colours in a image",
        technologies: "python, flask, scikit, opencv",
        link: "https://github.com/mushahidq/py_colour_identifier"
    },
    {
        name: "DogsVsCats-Classification-convolutional_neural_network",
        description: "A convolutional neural network for classification of the Dogs and Cats dataset provided by microsoft",
        technologies: "python, opencv, pytorch",
        link: "https://github.com/mushahidq/DogsVsCats-Classification-convolutional_neural_network"
    },
    {
        name: "DuelBot",
        description: "A quiz bot for discord with a twist",
        technologies: "javascript, node.js, discord.js, linode",
        link: "https://github.com/mushahidq/duelbot"
    },
    {
        name: "tidy_api",
        description: "A rest api that returns information about how to recycle things",
        technologies: "javascript, node.js, express.js, datastax astra, cql",
        link: "https://github.com/mushahidq/tidy_api"
    },
    {
        name: "Psych-o-tech",
        description: "A flask application with an emotion detection ai model to help psychiatrists.",
        technologies: "python, flask, opencv, tensorflow",
        link: "https://github.com/mushahidq/Psych-o-tech"
    },
    {
        name: "smart-interface-for-da",
        description: "An arduino based way for the differently abled to interact with some appliances and electronics in their home.",
        technologies: "c++, tinkercad, arduino-uno, bluetooth hc-05 module",
        link: "https://github.com/mushahidq/smart-interface-for-da"
    },
    {
        name: "trackh2o",
        description: "An arduino based device to help you stay hydrated",
        technologies: "c++, tinkercad, arduino-uno, pir motion sensor",
        link: "https://github.com/mushahidq/trackh2o"
    },
    {
        name: "recyclinator",
        description: "A discord bot that helps users recycle and reuse",
        technologies: "python, discord.py, onnx runtime",
        link: "https://github.com/mushahidq/recyclinator"
    },
    {
        name: "pico-rick-roll",
        description: "A raspberry pi pico rubber ducky device that will constantly rick roll",
        technologies: "python, circuitpython, adafruit_usb_hid, Raspberry Pi Pico,",
        link: "https://github.com/mushahidq/pico-rick-roll"
    },
    {
        name: "pico-rick-roll-flutter-app",
        description: "Flutter app for pico-rick-roll that connects over bluetooth",
        technologies: "Flutter, Dart, flutter_bluetooth_serial",
        link: "https://github.com/mushahidq/pico-rick-roll-flutter-app"
    },
    {
        name: "twilioquest-extenception",
        description: "A TwilioQuest extension to help users create their first extension.",
        technologies: "JavaScript, Pug, Node.js, Tiled, TwilioQuest",
        link: "https://github.com/mushahidq/twilioquest-extenception"
    },
    {
        name: "pragya-schoolFromHome",
        description: "A a centralized platform that provides a greater learning experience tailored to online learning. I worked on the fron-end for this app.",
        technologies: "Django, JavaScript, HTML, CSS, WebRTC",
        link: "https://github.com/mweaver87/SigmaHacks3_API"
    }
    
];

$(document).ready(function() {
    "use strict";

    // UTILITY
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    // END UTILITY

    // COMMANDS
    function cat(args) {

        args = args[0];
        var isValid = false;
        if (path == "" && args != null) {
            for (var i = 0; i < home_.length; i++) {
                if (args === home_[i].name) {
                    terminal.append(home_[i].value + "\n");
                    isValid = true;
                    break;
                }
            }
            if (!isValid) {
                terminal.append("file not found: " + args + "\n");
            }
        }
        else if (args != null) {
            for (var i = 0; i < projects.length; i++) {
                if (path.split('/')[1] === projects[i].name) {
                    console.log(path.split('/'));
                    if (args === "description") {
                        terminal.append(projects[i].description+"\n");
                        isValid = true;
                        break;
                    }
                    else if (args === "tech_stack") {
                        terminal.append(projects[i].technologies+"\n");
                        isValid = true;
                        break;
                    }
                    else if (args === "link") {
                        window.open(projects[i].link, '_blank');
                        isValid = true;
                        break;
                    }
                    isValid = true;
                    break;
                }
            }
            if (!isValid) {
                terminal.append("file not found: " + args + "\n");
            }
        }
    }

    function cd(args) {
        console.log(path.split('/'));

        args = args[0];
        var isValid = false;
        if (args == "..") {
            if (path.split('/').length > 2) {
                path = path.split('/').slice(0, -1).join('/');
            }
            else {
                path = "";
            }
        }
        else if ( args == "~"){
            path ="";
        }
        else if (path == "" && args != null) {
            if (args != ".." || args != "~") {
                for (var i = 0; i < home_.length; i++) {
                    if (args === home_[i].name) {
                        if (home_[i].type === "dir") {
                            path = home_[i].name;
                            isValid = true;
                            break;
                        }
                        else {
                            terminal.append("not a directory: " + args + "\n");
                            isValid = true;
                            break;
                        }
                    }
                }
                if (!isValid) {
                    terminal.append("dir not found: " + args + "\n");
                }
            }
        }
        else if (path == "projects" && args != null) {
            for (var i = 0; i < projects.length; i++) {
                if (args === projects[i].name) {
                    path += '/' + projects[i].name;
                    isValid = true;
                    break;
                }
            }
            if (!isValid) {
                terminal.append("dir not found: " + args + "\n");
            }
        }
    }

    function clear() {
        terminal.text("");
    }

    function echo(args) {
        var str = args.join(" ");
        terminal.append(str + "\n");
    }

    function help() {
        terminal.append("cat\t\tcd\t\tclear\t\techo\t\thelp\t\tls\t\tpwd\n");
    }

    function ls() {
        if (path == "") {
            for (var i = 0; i < home_.length; i++) {
                if (home_[i].type != "dir") {
                    terminal.append("<span>" + home_[i].name + "\t\t</span>");
                }
                else {
                    terminal.append("<span class=\"dir\">" + home_[i].name + "\t\t</span>");
                }
            }
            terminal.append("\n");
        }
        else if (path == "projects") {
            for (var i = 0; i < projects.length; i++) {
                terminal.append("<span class=\"dir\">" + projects[i].name + "\t\t</span>");
            }
        }
        else {
            terminal.append("description\t\ttech_stack\t\tlink\n");
        }
    }

    function pwd() {
        if (path != "") {
            terminal.append("<span class=\"path\">" + home + "/" + path + "</span>\n");
        }
        else {
            terminal.append("<span class=\"path\">" + home + "</span>\n");
        }
    }

    // Prompt,  welcome message and command handling
    var terminal = $(".terminal");
    var prompt = "$";
    var home = "~";
    var path = "";//path from home
    var user = "user@mushahids-portfolio-cli";

    var commandHistory = [];
    var historyIndex = 0;

    var command = "";
    var commands = [
        {
            "name": "cat",
            "function": cat
        },
        {
            "name": "cd",
            "function": cd
        },
        {
            "name": "clear",
            "function": clear
        },
        {
            "name": "echo",
            "function": echo
        },
        {
            "name": "help",
            "function": help
        },
        {
            "name": "ls",
            "function": ls
        },
        {
            "name": "pwd",
            "function": pwd
        }
    ];

    function processCommand() {
        var isValid = false;

        // Create args list by splitting the command
        // by space characters and then shift off the
        // actual command.

        var args = command.split(" ");
        var cmd = args[0];
        args.shift();

        // Iterate through the available commands to find a match.
        // Then call that command and pass in any arguments.
        for (var i = 0; i < commands.length; i++) {
            if (cmd === commands[i].name) {
                commands[i].function(args);
                isValid = true;
                break;
            }
        }

        // No match was found...
        if (!isValid) {
            terminal.append("command not found: " + command + "\n");
        }

        // Add to command history and clean up.
        commandHistory.push(command);
        historyIndex = commandHistory.length;
        command = "";
    }

    function displayPrompt() {
        terminal.append("<span class=\"user\">" + user + ":</span>");
        if (path == "") {
            terminal.append("<span class=\"path\">" + home + "</span>");
        }
        else {
            terminal.append("<span class=\"path\">" + home + "/" + path + "</span>");
        }
        terminal.append("<span class=\"prompt\">" + prompt + "</span>");
    }

    // Delete n number of characters from the end of our output
    function erase(n) {
        command = command.slice(0, -n);
        terminal.html(terminal.html().slice(0, -n));
    }

    function clearCommand() {
        if (command.length > 0) {
            erase(command.length);
        }
    }

    function appendCommand(str) {
        terminal.append(str);
        command += str;
    }

    /*
    //	Keypress doesn't catch special keys,
    //	so we catch the backspace here and
    //	prevent it from navigating to the previous
    //	page. We also handle arrow keys for command history.
    */

    $(document).keydown(function(e) {
        e = e || window.event;
        var keyCode = typeof e.which === "number" ? e.which : e.keyCode;

        // BACKSPACE
        if (keyCode === 8 && e.target.tagName !== "INPUT" && e.target.tagName !== "TEXTAREA") {
            e.preventDefault();
            if (command !== "") {
                erase(1);
            }
        }

        // UP or DOWN
        if (keyCode === 38 || keyCode === 40) {
        // Move up or down the history
            if (keyCode === 38) {
            // UP
                historyIndex--;
                if (historyIndex < 0) {
                historyIndex++;
                }
            }
            else if (keyCode === 40) {
                // DOWN
                historyIndex++;
                if (historyIndex > commandHistory.length - 1) {
                    historyIndex--;
                }
            }

            // Get command
            var cmd = commandHistory[historyIndex];
            if (cmd !== undefined) {
                clearCommand();
                appendCommand(cmd);
            }
        }
    });

    $(document).keypress(function(e) {
        // Make sure we get the right event
        e = e || window.event;
        var keyCode = typeof e.which === "number" ? e.which : e.keyCode;

        // Which key was pressed?
        switch (keyCode) {
            // ENTER
            case 13:
            {
                terminal.append("\n");
                processCommand();
                displayPrompt();
                break;
            }
            default:
            {
                appendCommand(String.fromCharCode(keyCode));
            }
        }
    });
    // Display welcome message and prompt
    terminal.append(banner + "\n");
    terminal.append("Hello There!\nI'm Mohammed Mushahid Qureshi, a CS student from India. Welcome to my command line portfolio.\nUse the \$help to find out the commands for this interface.\nHappy Hacking.\n");
    displayPrompt();
});
