console.log('Beep beep!');

require('dotenv').config();

const fetch = require("node-fetch");

const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.DADBOT);


client.on('ready', readyDiscord);

function readyDiscord() {
  console.log('Daddy is ready');
} 

const replies = [
  "I can’t believe I got fired from the calendar factory. All I did was take a day off!",
  "Money talks. Mine always says goodbye.",
  "I went to see the doctor about my short-term memory problems — the first thing he did was make me pay in advance.",
  "You have two parts of the brain, “left” and “right”. On the left side, there’s nothing right and on the right side, there’s nothing left.",
  "Why do bees hum? They don’t remember the lyrics!",
  "I have a dog to provide me with unconditional love, but I also have a cat to remind me that I don’t deserve it. It’s all about balance.",
  "Don’t spell part backward. It’s a trap.",
  "Today a man knocked on my door and asked for a small donation towards the local swimming pool. I gave him a glass of water.",
"Most people are shocked when they find out how bad I am as an electrician.",
"I find it ironic that the colors red, white, and blue stand for freedom until they are flashing behind you.",
"Is your bottom jealous of the amount of crap that comes out of your mouth?",
"There’s a new restaurant called Karma. There’s no menu. You get what you deserve.",
"Did you hear about the guy whose whole left side got amputated? He’s all right now.",
"Thanks for explaining the word “many” to me, it means a lot.",
"I hope when I inevitably choke to death on gummy bears, people just say I was killed by bears and leave it at that.",
"I accidentally handed my wife a glue stick instead of chapstick. She still isn’t talking to me.",
"I’m reading a book about anti-gravity. It’s impossible to put down.",
"I wasn’t originally going to get a brain transplant, but then I changed my mind.",
"R.I.P boiled water. You will be mist.",
"Alcohol is a perfect solvent: It dissolves marriages, families, and careers.",
"I got a new pair of gloves today, but they’re both lefts which, on the one hand, is great, but on the other, it’s just not right.",
"My wife just found out I replaced our bed with a trampoline. She hit the roof.",
"What is the best thing about living in Switzerland? Well, the flag is a big plus.",
"Atheism is a non-prophet organization.",
"Did you hear about the guy who got hit in the head with a can of soda? He didn’t get hurt because it was a soft drink.",
"The future, the present, and the past walked into a bar. Things got a little tense.",
"At what age is it appropriate to tell my dog that he’s adopted?",
"I just found out that I’m colorblind. The diagnosis came completely out of the purple.",
"I bought some shoes from a drug dealer. I don’t know what he laced them with, but I’ve been tripping all day.",
"My boss is going to fire the employee with the worst posture. I have a hunch, it might be me.",
"I started out with nothing, and I still have most of it.",
"Smoking will kill you… bacon will kill you… and yet, smoking bacon will cure it.",
"I was addicted to the hokey pokey… but thankfully, I turned myself around.",
"Did Noah include termites on the ark?",
"The man who created autocorrect has died. Restaurant in peace.",
"I used to think I was indecisive, but now I’m not too sure.",
"My wife likes it when I blow air on her when she’s hot, but honestly… I’m not a fan.",
"I really hate Russian dolls, they’re so full of themselves.",
"The first time I got a universal remote control, I thought to myself, “This changes everything.”",
"I refused to believe the road worker was stealing from his job, but when I went to his home, all the signs were there.",
"I recently decided to sell my vacuum cleaner — all it was doing was gathering dust.",
"PMS jokes are not funny — period!",
"Where there’s a will, there’s a relative.",
"It’s hard to explain puns to kleptomaniacs — they’re always taking things literally.",
"I like to hold hands at the movies, which always seems to startle strangers.",
"Women should not have children after 35, but 35 kids are enough!",
"There are three kinds of people. Those who can count and those who can’t.",
"Whenever I lose my TV controller, I always find it in a remote location.",
"My first job was working in an orange juice factory, but I got canned. I just couldn’t concentrate.",
"My math teacher called me average. She’s so mean!",
"“The easiest time to add insult to injury is when you’re signing somebody’s cast.” — Demetri Martin",
"I don’t have an attitude problem. You have a perception problem.",
"I’m skeptical of anyone who tells me they do yoga every day. That’s a bit of a stretch.",
"Light travels faster than sound, which is why some people appear bright before they open their mouth.",
"“It’s sad that a family can be torn apart by something as simple as wild dogs.” — Jack Handey",
"I don’t have a boyfriend, but I do know a guy who would be really mad to hear that.",
"“The worst time to have a heart attack is during a game of charades.” — Demetri Martin",
"When dogs go to sleep, they read bite-time stories before bed.",
"“I don’t want to be part of a club that would have me as a member.” — Groucho Marx",
"“Does my wife think I’m a control freak? I haven’t decided yet.” — Stewart Francis",
"Dogs hate driving because they can never find a barking space.",
"“I have a lot of growing up to do. I realized that the other day inside my fort.” — Zach Galifianakis",
"“Honesty may be the best policy, but it’s important to remember that apparently, by elimination, dishonesty is the second-best policy.” — George Carlin",
"“I looked up my family tree and found out I was the sap.” — Rodney Dangerfield",
"Keep the dream alive — hit your snooze button.",
"It sure takes a lot of balls to golf the way I do.",
"I was wondering why the ball kept getting bigger and bigger, and then it hit me.",
"The person who invented knock-knock jokes should get a no bell prize.",
"The other day I asked the banker to check my balance, so she pushed me.",
"For a while, Houdini would use a trap door in every single one of his shows. I guess you could say he was going through a stage.",
"I hope there’s no pop quiz on the class trip to the Coca-Cola factory.",
"If money doesn’t grow on trees, how come banks have branches?",
"I didn’t like my beard at first, but it grew on me.",
"Give me the calculator. Friends don’t let friends derive drunk.",
"A baseball walks into a bar, and the bartender throws it out.",
"I doubt, therefore, I might be.",
"I used to have a handle on life, but then it broke.",
"I had an “hourglass” figure, but then the sand shifted.",
"When everything is coming your way — you’re in the wrong lane.",
"Animal testing is a terrible idea because they get all nervous and give the wrong answers.",
"“I was playing chess with my friend and he said, ‘Let’s make this interesting’. So we stopped playing chess.” — Matt Kirshen",
"“Crime in multi-story car parks. That is wrong on so many different levels.” — Tim Vine",
"“I was raised as an only child, which really annoyed my sister.” — Will Marsh",
"“People who use selfie sticks really need to have a good, long look at themselves.” — Abi Roberts",
"“A thesaurus is great. There’s no other word for it.” — Ross Smith",
"“Two fish in a tank. One says, ‘How do you drive this thing?'” — Peter Kay",
"“I saw a documentary on how ships are kept together. Riveting!” — Stewart Francis",
"“People who like trance music are very persistent. They don’t techno for an answer.” — Joel Dommett",
"“Do Transformers get car or life insurance?” — Russell Howard",
"“My father drank so heavily, when he blew on the birthday cake he lit the candles.” — Les Dawson",
"I once saw two people wrapped in a barcode and had to ask, “Are you an item?”",
"I went to buy camouflage trousers, but I couldn’t find any.",
"“Alright lads, a giant fly is attacking the police station. I’ve called the SWAT team!” — Greg Davies",
"“I usually meet my girlfriend at 12:59 because I like that one-to-one time.” — Tom Ward",
"“I like a woman with a head on her shoulders. I hate necks.” — Steve Martin",
"My husband and I were happy for 20 years. And then we met.",
"I, for one, like Roman numerals.",
"When my boss asked me who was stupid, me or him, I told him he doesn’t hire stupid people.",
"Every married person should forget their mistakes. There’s no point in two people remembering the same thing.",
"My wife told me to stop impersonating a flamingo. I had to put my foot down.",
"I have an inferiority complex, but it’s not a very good one.",
"People tell me I’m condescending. (Leans in real close) That means I talk down to people.",
"“By the time a man is wise enough to watch his step, he is too old to go anywhere.” — Billy Crystal",
"“Proof that we don’t understand death is that we give dead people a pillow.” — Jerry Seinfeld",
"“Don’t talk to me about Valentine’s Day. At my age, an affair of the heart is a bypass.” — Joan Rivers",
"“Learning to dislike children at an early age saves a lot of expense and aggravation later in life.” — Ed Byrne",
"“I failed math so many times in school I lost count.” — Stewart Francis",
"“Oh, when I was a kid in show business, I was poor. I used to go to orgies to eat the grapes.” — Rodney Dangerfield",
"“In the school I went to, they asked a kid to prove the law of gravity and he threw the teacher out of the window.” — Rodney Dangerfield",
"“I looked up my family tree and found three dogs using it.” — Rodney Dangerfield",
"“One time my whole family played hide and seek. They found my mother in Pittsburgh!” — Rodney Dangerfield",
"“I met the surgeon general. He offered me a cigarette.” — Rodney Dangerfield",
"I ate a clock yesterday, and it was very time-consuming.",
"A perfectionist walked into a bar — apparently, the bar wasn’t set high enough.",
"A termite walks into the bar and asks, “Is the bar tender here?”",
"Just burned 2,000 calories. That’s the last time I leave brownies in the oven while I nap.",
"Always borrow money from a pessimist; they’ll never expect it back.",
"I want to die peacefully in my sleep, like my grandfather. Not screaming and yelling like the passengers in his car.",
"Don’t you hate it when someone answers their own questions? I do.",
"My therapist says I have a preoccupation with revenge. We’ll see about that.",
"I told my girlfriend she drew her eyebrows too high. She seemed surprised.",
"What happens to a frog’s car when it breaks down? It gets toad away.",
"“Employee of the month is a good example of how somebody can be both a winner and a loser at the same time.” — Demetri Martin",
"“When I was a boy, I laid in my twin-sized bed and wondered where my brother was.” — Mitch Hedberg",
"“My drug test came back negative. My dealer sure has some explaining to do.” — Unknown",
"What vitamin helps you to see? Vitamin C.",
"Why did the burglar rob a bakery? He needed the dough.",
"Why wouldn’t the sesame seed leave the casino? He was on a roll.",
"I put my grandma on speed dial. I call that Instagram.",
"Why did the scarecrow win an award? He was outstanding in his field.",
"I was wondering why the frisbee kept getting bigger and bigger…",
"Then it hit me.",
"Whiteboards are remarkable.",
"How do you make holy water? You boil the hell out of it.",
"I went to a seafood disco last week. I pulled a mussel.",
"I bought the world’s worst thesaurus yesterday. Not only is it terrible, but it’s also terrible.",
"Life is like a diploma. As in my parents keep telling me to get one.",
"Did you hear about the ATM that got addicted to money? It suffered from withdrawals.",
"What goes, “Oh, oh, oh”? Santa walking backward.",
"What do you call a sleeping dinosaur? A dino-snore.",
"Why did the picture go to jail? Because it was framed.",
]

const replies1 = [ 
  "You’re so hot, my zipper is falling for you.",
"I’m on top of things. Would you like to be one of them?",
"They say that kissing is a language of love, so would you mind starting a conversation with me?",
"Are you an eco-friendly kind of girl? The condom in my pocket goes expires tomorrow, so why don’t you help me use it?",
"Is your name winter? Because you’ll be coming soon.",
"Do you want to commit a sin for your next confessional?",
"I’m not into watching sunsets, but I’d love to see you go down.",
"Are you an exam? Because I have been studying you like crazy.",
"Can you tell me what time you’ll come back to my place, please?",
"Give me your car keys so I can drive you crazy.",
"Is your name Earl Grey? Because you look like a hot-tea!",
"I love my bed, but I’d rather be in yours.",
"Are you a haunted house? Because I’m going to scream when I’m in you.",
"Your body is 70 percent water… and I’m thirsty.",
"Are you undressing me with your eyes?!",
"Your outfit would look great on my bedroom floor.",
"Is it hot in here? Or is it just you?",
"I lost my keys… can I check your pants?",
"Did you know my lips are like Skittles and you’re about to taste the rainbow?",
"Do I have to sign for your package?",
"I know a great way to burn off the calories in that drink.",
"Please don’t let this go to your head, but do you want some?",
"Are you an elevator? Because I’ll go up and down on you.",
"You look great right now. Do you know what else would look great on you? Me!",
"With school, I just want an A. With you, I just want to F.",
"Did you have Lucky Charms for breakfast? Because you look magically delicious!",
"Roses are red. Violets are fine. You be the six. I’ll be the nine.",
"Do you drink soda? Because you look so-da-licious.",
"Do you have a shovel? Because I’m digging you.",
"What did you say your name was? I want to make sure I’m screaming the right name tonight.",
"That’s a nice shirt. Can I try it on after we have sex?",
"I think I could fall madly in bed with you.",
"Can I borrow a kiss? I promise I’ll give it back.",
"Are you a campfire? Because you’re hot and I want s’more.",
"If you’re feeling down, I can feel you up.",
"What is a nice person like you doing in a dirty mind like mine?",
"We were both born without clothes.",
"I’m peanut butter. You’re jelly. Let’s have sex.",
"I’m not feeling myself today. Can I feel you instead?",
"I don’t think I want babies, but I wouldn’t mind refining my baby-making technique with you.",
"You know what winks and then screws like a tiger? (Wink)",
"My doctor told me I have a vitamin D deficiency. Want to go back to my place and save me?",
"Are you my homework? Because I’m not doing you, but I definitely should be.",
"Are you a drill sergeant? Because you have my privates standing at attention.",
"Can you do telekinesis? Because you’ve made a part of me move without even touching it.",
"Treat me like a pirate and give me that booty.",
"If you were a flower, you’d be a damn-delion.",
"Let’s play Titanic. You’ll be the iceberg and I’ll go down.",
"Dinner first, or can we go straight for dessert?",
"I was feeling very off today, but then you turned me on.",
"Does your name start with “C” because I can “C” us getting down.",
"I’m having trouble sleeping by myself. Can you sleep with me?",
"This might seem corny, but you’re making me horny.",
"Want to save water by showering together?",
"I’m an adventurer and I want to explore you.",
"Want to go half on a baby?",
"Do you have room for an extra tongue in your mouth?",
"Are you a supermarket sample? Because I want to taste you again and again without any sense of shame.",
"Are you a sea lion? Because I can sea you lion in my bed tonight.",
"Are you Dracula? You looked a little thirsty when you were looking at me.",
"Don’t ever change. Just get naked.",
"I’m just like a pore strip. Hard to get off, but extremely satisfied once you do.",
"You are so selfish. You’re going to have that body for the rest of your life and I just want it for one night.",
"If your upper lip is Christmas and your lower lip is Thanksgiving, can I come visit some time in between?",
"Did you send the invitation to the party between your legs by mail, or do you wanna give it to me in person?",
"If I was the judge, I’d sentence you to my bed.",
"Is that a candy cane in your pocket or are you just happy to see me?",
"You must be yogurt because I want to spoon you.",
"Damn, if being sexy was a crime, you’d be guilty as charged!",
"My name isn’t Elmo, but you can tickle me any time you want to.",
"Are you a trampoline? Because I want to bounce on you.",
"Let only latex stand between our love.",
"Do you like bacon? Wanna strip?",
"Your legs must be tired because you’ve been running through my mind all night.",
"Nice dress. Can I talk you out of it?",
"Can I borrow your lips?",
"Roses are red. Violets are blue. I’m coming home with you.",
"There must be a light switch on my forehead because every time I see you, you turn me on!",
"So as long as we’re in the theatre… why don’t we get some play?",
"That shirt looks great on you… as a matter of fact, so would I.",
"Stop, drop, and roll, baby. You are on fire.",
"I think you’re suffering from a lack of vitamin me.",
"Baby, you’re so sweet, you put Hershey’s Kisses out of business.",
"Izs that a mirror in your pants because I can see myself in them.",
"Want to play conductor? You be the engineer and I’ll go choo-choo.",
"If you look that good in clothes, you must look even better out of them.",
"Baby, you’re so hot, you make the equator look like the north pole.",
"Someone should call the police because you just stole my heart!",
"Did you get those pants for 50 percent off? They’re 100 percent off at my place.",
" Just checked my battery life, it’s at 69%.",
"I find your lack of nudity disturbing.",
"Are you a raisin? Cause you’re raising my hopes for a kiss right about now.",
"I hate to see you go, but I love to watch you leave.",
"I’d love to be the devil on your shoulder and the devil on your lips.",
"Complete this sentence: “You, me, and ____.”",
"Did you hear that new Cardi B song? Want me to sing it to you?",
"In the words of the great Lizzo, I just took a DNA test, turns out I’m 100% your base.",
"Did you make Santa’s naughty list this year? You want to?",
"Want to spin my dreidels?",
"I got Hanukkah gelt in my pockets. Do you want to go get them?",
"You’re like my menorah’s candles… getting hotter every day.",
"Wanna go light my menorah?",
"Much like Santa, I also have a gift for you in my sleigh.",
"Is your name Clause, cause you got Mrs. written all over you.",
"I’m not a weatherman, but you can expect a few more inches tonight.",
"I’m not a dentist, but I bet I could give you a filling.",
"Are you an archaeologist? Because I’ve got a large bone for you to examine.",
"Aside from being extremely sexy, what else do you do for a living?",
"I must be a beaver because I’m dying for your wood.",
"If I were an enzyme, I’d be DNA helicase so I could unzip your genes.",
"I have 206 bones in my body. Want to give me another one?",
"Hey, do you have an inhaler? ‘Cause I heard you got that ass, ma!",
"You know, if I were you, I’d have sex with me.",
"I may not go down in history, but I will go down on you.",
"Your clothes look so uncomfortable. Why don’t you let me help you take them off?",
"I wish you were here to play ‘Simon Says’ with me… in bed.",
"Did you sit in a pile of sugar? ‘Cause you have a pretty sweet ass!",
"Let’s play carpenter! First, we’ll get hammered, then I’ll nail you.",
"Do you believe in karma? Because I know some good karma-sutra positions.",
"Do you have any room for an extra tongue in your mouth?",
"Are you religious? Because you’re the answer to all my prayers.",
"Oh! I lost my phone number. Can I have yours?",
"Kiss me if I’m wrong, but fish can fly, right?",
"My mom said she found a beautiful and intelligent girl for me. Is that you?",
"Are you Siri? Because you autocomplete me.",
"Let’s save water by taking a shower together.",
"Did you know I am good with numbers? Give me yours so I can prove it to you.",
"Hey. I’m Mr. Right. I heard you were looking for me.",
"I was wondering if you had an extra heart. Mine was just stolen.",
"Hi, my name is [your name], but you can call me tonight or tomorrow.",
"Hey. I’m doing my thesis on the finer things in life. Can I interview you?",
"Are you a magician? Because when I look at you, everyone else disappears.",
"I’ll cook you dinner if you cook me breakfast. Deal?",
"Are you a volcano? Coz I lava you!",
"How long do I have? (Huh? Until what?) Until you have to be back in heaven.",
"Feel my shirt. It’s made of boyfriend material.",
"Are you a camera? Because every time I look at you, I smile.",
"If Disney is the happiest place on Earth, in your arms is no doubt the happiest place in the universe.",
"Ya know, I was feeling a little off today. But you’ve turned me on.",
"Thank god I have life insurance. Because you make my heart stop.",
"Can you do me a favor? I need you to take down my number.",
"You’re so beautiful that you made me forget my pick-up line.",
"If being in love was illegal, I would want to be your partner in crime.",
"Your lips look lonely. Wanna introduce them to mine?",
"Aside from being so gorgeous and intelligent, what are your other attributes?",
"Did you know penguins stick to one partner their whole life? Would you like to be my penguin?",
"Do you remember me? I’m the man of your dreams.",
"Life without you is like a broken pencil. Pointless.",
"Sir, I’m going to need you to step away from the bar. You’re melting all the ice.",
"That’s a nice shirt. Can I talk you out of it?",
"Was your dad a boxer? Because damn, you’re a knockout!",
"Did you just come out of the oven? You’re too hot to handle.",
"Wanna share your side of the bed tonight?",
"Are you a loan? Because you are gaining my interest.",
"If I were an octopus, all my hearts would belong to you.",
"If you were a transformer, you’d be Optimus Fine.",
"I know we’re not socks, but we make a great pair.",
"You must be a broom, ‘cause you just swept me off my feet.",
"If I had to choose between winning the lottery or you…",
"Obviously, I’d choose the money, but it’d be close. And I’d probably use a bunch of my money to woo you.",
"Did it hurt when you fell from the vending machine? Because you look like a snack.",
"Did your license get suspended for driving all these girls crazy?",
"Let’s get together and be the number Pi, endless and irrational.",
"It’s not my fault I fell in love, you’re the one that tripped.",
"Were you a Boy Scout? You’ve tied my heart in a knot.",
"Kiss me if I’m wrong, but I think you want to be my next boyfriend.",
"I’m going for a walk. Would you mind holding my hand?",
"Are you a pie? Because I’d like a piece of you.",
"Well, here I am. What are your other two wishes?",
"Do you like raisins? How do you feel about a date?",
"Are you French because Eiffel for you.",
"Life without you is like a broken pencil… pointless.",
"Hey, tie your shoes! I don’t want you falling for anyone else.",
"I’ll give up my morning cereal to spoon you instead.",
"What has 36 teeth and holds back the Incredible Hulk? My zipper.",
"If you were a steak, you would be well done.",
"Hello, I’m a thief, and I’m here to steal your heart.",
"Are you cake? Cause I want a piece of that.",
"If you were a library book, I would check you out.",
"Are you a cat because I’m feline a connection between us!",
"If nothing lasts forever, will you be my nothing?",
"I’m new in town. Could you give me directions to your apartment?",
"Sorry, but you owe me a drink. [Why?] Because when I looked at you, I dropped mine.",
"If you were a potato, you’d be a sweet one.",
"Kiss me if I’m wrong, but dinosaurs still exist, right?",
"I must be in a museum because you truly are a work of art.",
"There must be something wrong with my eyes. I can’t take them off you.",
"You spend so much time in my mind, I should charge you rent.",
"Are you Australian? Because you meet all of my koala-fications.",
"Do I know you from somewhere? Oh, that’s right. My dreams.",
"Hello. Cupid called. He wants to tell you he needs my heart back.",
"My lips are like skittles. Wanna taste the rainbow?",
"People call me John, but you can call me tonight.",
"Are you my phone charger? Because without you, I’d die.",
"Hey! Are you garbage? I’ll take you out!",
"Can I give you a hug to show you how soft my sweater is?",
"I’m so lost. I was looking for your number.",
"Is your daddy a drug dealer? Because I think you look dope.",
"You’re like pizza. Even when you’re bad, you’re good.",
"I may not be a genie, but I can make your dreams come true.",
"Do you like coffee? Because I like you a latte.",
"Well, here I am. What were your other two wishes?",
"If you were a transformer, you’d be a HOT-obot, and your name would be Optimus Fine.",
"Are you from Tennessee? Because you’re the only 10 I see!",
"Are you a beaver? Cause daaaaaaaaam!",
"Do you know karate? Because your body is really kickin’.",
"Hey! My name is Microsoft. Can I crash at your place tonight?",
"Pizza is my second favorite thing to eat in bed.",
"Do you like action movies? Because you’re giving me Jean Claud Van Daaaaaaaam vibes.",
"I went to Alabama for college. Want to Roll Tide Roll with me?",
"What’s your sign?",
"Do you like raisins? How do you feel about a date?",
"If I could rearrange the alphabet, I’d put ‘U’ and ‘I’ together.",
"Are you a parking ticket? Because you’ve got FINE written all over you.",
"Are you from Tennessee? Because you’re the only 10 I see!",
"Are you French? Because Eiffel for you.",
"I’m no photographer, but I can picture us together.",
"Feel my shirt. Know what it’s made of? Wifey material.",
"Are you Australian? Because you meet all of my koala-fications.",
"OMG. I was going to wear this exact same outfit tonight.",
"Are you a magician? When I look at you everything disappears.",
"There is something wrong with my cell phone. It doesn’t have your number in it.",
"Are you religious? Cause you’re the answer to all my prayers.",
" Do you believe in love at first sight — or should I walk by again?",
"Do you like coffee? Because I like you a latte.",
"Can I give you a hug to show you how soft my sweater is?",
"If a star fell from the sky every time I thought about you, then tonight the sky would be empty.",
"Is it hot in here? Or is it just you?",
"I don’t have a library card, but do you mind if I check you out?",
"Are you the sun? I’m about to get a sunburn looking at you.",
" Hey, tie your shoes! I don’t want you falling for anyone else.",
"Roses are red. Violets are blue. I didn’t know what perfect was until I met you.",
"Can I follow you where you’re going right now? Because my parents always told me to follow my dreams.",
"You look great right now. Do you know what else would look great on you? Me!",
"You dropped something. My jaw.",
"If you were words on a page, you’d be fine print.",
"There must be something wrong with my eyes, I can’t take them off you.",
"Are you a bank loan? Because you got my interest. Somebody call the cops, because it’s got to be illegal to look that good!",
"Do you know why it doesn’t matter if there’s gravity or not? Because I’d still fall for you.",
"I must be a snowflake, because I’ve fallen for you.",
"Are you a keyboard ? Because you are my type.",
"Do you have a map? I just got totally lost in your eyes.",
"Are you an interior decorator? When I saw you the room became so beautiful.",
"Sweetness is my weakness.",
"You know what’s the worst thing that can happen to you right now? Me not dating you.",
"I know you’re busy today, but can you add me to your to-do list?",
"Has anyone ever told you how beautiful my eyes are?",
"If you were a steak you would be well done.",
"You must be a broom because you swept me off my feet.",
"Did it hurt when you fell from heaven?",
"Drake would call you and I God’s Plan.",
"Come live in my heart, and pay no rent.",
"Hello, I’m a thief, and I’m here to steal your heart.",
"Does your name start with “C” because I can C us together.",
"Have you always been this cute, or did you have to work at it?",
"Are you cake? Cause I want a piece of that.",
"Is it okay if I take a photo of you so I can show Santa what I want for Christmas?",
"Did you just strike a match? I swear as soon as you walked in, it got lit.",
"I’m going to make you my boyfriend for the next five minutes. Let’s see how you like it.",
"Do you have a New Year’s resolution? Because I’m looking at mine right now.",
"Are you lost ma’am? Because heaven is a long way from here.",
"There is something wrong with my cell phone. It doesn’t have your number in it.",
"If you were a library book, I would check you out.",
"Your hand looks heavy. I can hold it for you!",
"Are you a cat because I’m feline a connection between us",
"If I were to ask you out on a date, would your answer be the same as the answer to this question?",
"Hello. Are you taking any applications for a boy/girlfriend?",
"If nothing lasts forever, will you be my nothing?",
" I’m new in town. Could you give me directions to your apartment?",
"When God made you, he was showing off.",
"I must be in a museum, because you truly are a work of art.",
"You spend so much time in my mind, I should charge you rent.",
"My lips are like skittles. Wanna taste the rainbow?",
"Well, here I am. What were your other two wishes?",
"Are you from Tennessee? Because you’re the only 10 I see!",
"Is your last name Gillette? Because you are the best a man can get.",
"Do I know you from somewhere? Oh, that’s right. My dreams.",
"Can I borrow your lips?",
"If you were a tear in my eye I would not cry for fear of losing you.",
"Life without you is like a broken pencil… pointless.",
"I’d rate you a nine because the only thing missing is me.",
"Do you want to see a picture of a beautiful person? (hold up a mirror)",
"Is your body from McDonald’s? Cause I’m lovin’ it!",
"They say that kissing is a language of love, so would you mind starting a conversation with me?",
"I’m on top of things. Would you like to be one of them?",
"Is your name winter? Because you’ll be coming soon.",
"If happiness starts with “H” why does mine start with “U”?",
"If you were a fruit you’d be a fineapple.",
" I’ll give you a kiss. If you don’t like it, you can return it.",
"Did you swallow magnets? Cause you’re attractive.",
"Be careful! You might get arrested for stealing my heart.",
"There is something wrong with my phone. Could you call it for me to see if it rings?",
"Do you have a name, or can I call you mine?",
"Roses are red. Violets are blue. It would be a shame if I couldn’t date you.",
"Are you craving pizza? Because I’d love to get a pizz-a you.",
"Hug me if I’m wrong, but isn’t the earth flat?",
"Are you a keyboard? Because you’re just my type.",
"Do you like science? Because I got my ion you.",
"Wouldn’t we look cute on a wedding cake together.",
"Would you touch my hand so I can tell my friends I’ve been touched by an angel?",
"Kiss me if I’m wrong, but dinosaurs still exist, right?",
"There isn’t a word in the dictionary for how good you look.",
"You must be a ninja, because you snuck into my heart",
"Can you pinch me, because you’re so fine I must be dreaming.",
"Do you know what I would do if I was a surgeon? I’d give you my heart.",
"I may not be a genie, but I can make all your wishes come true!",
"Are you Australian? Because you meet all of my koala-fications.",
"I’m not drunk, I’m just intoxicated by you.",
"If I followed you home, would you keep me?",
"Do you want to build a snowman? It might be hard since you’ll probably melt his heart, too.",
"Do you have an inhaler? You took my breath away.",
"If you were a Transformer you’d be Optimus Fine!",
"I’m learning about important dates in history. Wanna be one of them?"

]

client.on('message', gotMessage);

async function gotMessage(msg) {
  if (msg.channel.id == "880874627012894780") {
   let mess = msg.cleanContent.split(" ");

  if (mess[0] === "Dad") {
    const index = Math.floor(Math.random() * replies.length);
    msg.channel.send(replies[index]);

  }  else if (mess[0] === "Daddy") {
    const index = Math.floor(Math.random() * replies1.length);
    msg.channel.send(replies1[index]);
  } else if (mess[0] == "gif") {
    let keywords = "cat";
    if (mess.length > 1) {
      keywords = mess.slice(1, mess.length).join(" ");
    }
    let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.DADGIF}&limit=8`;
    let response = await fetch(url);
    let json = await response.json();
    const index = Math.floor(Math.random() * json.results.length);
    msg.channel.send(json.results[index].url);
   
  }
 }
}


