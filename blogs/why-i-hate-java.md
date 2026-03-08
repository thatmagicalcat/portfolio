---
title: "Why I hate java so much"
date: "2025-05-24"
description: "self explanatory"
tags: ["java", "is", "bullshit"]
---

"a boilerplate driven programming language used to write instant legacy code"
i can tell you about a few personal issues i have ![](https://cdn.discordapp.com/emojis/1112091401715462174.webp?size=24)

![](https://cdn.discordapp.com/emojis/1375125290702868613.webp?size=64) ![](https://cdn.discordapp.com/emojis/813039523796615208.webp?size=64&animated=true)

*breaths in* <br/>*AHHHH*

Java is probably the only language where i need to perform a blood sacrifice to the oracle gods first if i want to print hello world

let's start with the OG sin ![](https://cdn.discordapp.com/emojis/1079745405270630483.webp?size=24), `null`, which is considered as the "*billion dollar mistake*"
java not only made that mistake, but literally married it, gave it to the type system, threw it into every object ref by default so that it can ambush you with `NullPointerException` after each line you write.

Generic function..... what a cool concept.... but wait, it is java, of course it has fuck it ![](https://cdn.discordapp.com/emojis/1305384807387365406.webp?size=24&animated=true). Instead of doing it correctly like Rust, C# or even C++, they made it an *illusion* of type safety. at runtime java literally gets alzheimer's and forgets what your types are. want to check `instanceof T`? lol nope, java says fuck you.
it's basically syntactic sugar for "trust me bro".

Object type and primitive type schism??!?! you think primitive types are first class citizes? well, fuck you they're  second class citizens. `int`, `boolean`, `double` don't inherit object type.... what's the problem with that? you may ask, well, you can't do `List<int>` even tho it makes perfect sense?!? well, java will up to your face and say fuck you, now you need to use wrapper types, `Integer`, `Boolean`, `Double`...
This shit literally has like two separate type systems??!?!?! ![](https://cdn.discordapp.com/emojis/749633151973720145.webp?size=24&animated=true)

Fellow programmer, i see you want to write a lil utility function... well, fuck you, welcome to `public final class Utils`. It forces you to simulate lang features which should just exist, it leads to unnecessary verbosity and boilerplate.

Oh right how can we forget.. the everything is a class tenet
this class obsessed design expects you to jerk off to the Design Patterns book. you can't model simple data elegantly..

Ah! let me tell you about java's copium ![](https://cdn.discordapp.com/emojis/1223950700996984883.webp?size=24&animated=true) button, `final`!!!!!!!!!!!!!
- me: i think i know what `final` means!
- java: what
- me: it means that you can't reassign this.. right?
- java: No fuck you, final means the reference can't change, the object is still mutable
- me: that's it?
- java: no dammit, you can put that on methods that means it can't be override
in addition you can put it on a class too `final class Something`, what does it means? yes you guessed it, it means that no inheritance is allowed, it's is pretty obvious.... right?

shit feels like a swiss army knife, but for the syntax, just pick a damn meaning you assholes ![](https://cdn.discordapp.com/emojis/1305255037676556359.webp?size=24&animated=true)

And don't get me started on checked exceptions. the compiler literally holding a gun in yo ass, forcing you to try { ... } catch the entire universe just because a file might not exist.

Ok but i think java is kinda fast...., well, nice joke let me tell you about my performance tax. me: excuse me? what the fk? yup, you heard it right, lemme introduce autoboxing and unboxing which will slow down your app and create unnecessary garbage

The language itself is not the only problem, lemme show you the usual directory structure of a *java hello world program* which uses maven or gradle
```
project
├── src
│   └── main
│       └── java
│           └── com
│               └── example
│                   └── app
│                       └── helloworld.java
```

Yup! that's the sacred ~staircase to hell cause after writing java you might wanna kill yourself~ package path, and Oh! i almost forgor, did you add the maven archetype? have you declared your groupId and artifactId correctly? have you saw yourself in mirror and questioned your existence? have you...

**SHUT THE FUCK UP JAVA, I JUST WANT TO PRINT A FUCKING STRING.**


And how can i forget its over engineering for the sake of enterprises. dependency injection frameworks, bean factories, 69 layers of abstraction, xml configuration, that fucking elephant ![](https://cdn.discordapp.com/emojis/1362894631918108802.webp?size=24&animated=true) oh my fucking god i swear i'll literally eat whoever made that 

Oracle?!??! boi dat evil dungeon master stuck on enterprise stone age has its own lore, i think we all know about it. Fuck you oracle 

Side note: whatever i've wrote may not be true, take it as a joke, i'll eat you if you argue w me about java ![](https://cdn.discordapp.com/emojis/988277423856562186.webp?size=24).
