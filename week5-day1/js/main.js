(function() {
    Handlebars.registerHelper('prevent-orphan', function(text) {
      var lastSpace = text.toLowerCase().lastIndexOf(" ");
      return text.slice(0, lastSpace) + text.slice(lastSpace).replace(' ', '&nbsp;');
    });

    var fetchLeague = {
        dogs: {
            abbie: {
                name: 'Abbie',
                toys: ['Tennis Ball', 'Stuffed Octopus', 'Anything Squeaky'],
                bio: 'Litter Box stay lick barky wag tail stick roll over running parrot furry. Bird pet supplies aquatic critters carrier Snowball bird seed nap polydactyl park biscuit scratcher string wet nose. House Train Mittens carrier wagging teeth heel ferret pet harness critters cockatiel vitamins harness kitty chirp leash. Slobber chirp stick vaccination biscuit vitamins leash crate. Play Dead tabby whiskers park nap lick Buddy left paw brush dog bedding vaccine parrot aquatic. Biscuit mouse warm food water dog leash smooshy parrot head. Stripes walk pet gate slobbery field furry. Carrier crate stick birds run fast mouse Mittens twine teeth walk pet. Pet drool yawn kisses wagging dragging canary heel. Licks yawn park Buddy biscuit stay bird seed.Tail Buddy meow Fido lick Tigger. Catch slobbery sit purr sit house train string bird biscuit cockatiel behavior play dead kitty bark bird seed string bird food left paw. Cockatiel feeder dinnertime running cat mouse carrier. Good Boy Rover roll over slobber lazy cat pet supplies birds Scooby snacks commands crate hamster string dog teeth Tigger litter wag tail walk kisses. Bird barky ID tag puppy feathers yawn hamster cage wagging toys kitten good boy harness.',
                image: 'images/abbie.jpg',
                hobbies: ['Fetch', 'Swimming', 'Seeking all the attention'],
                details: {
                    age: '4 Years',
                    breed: 'Whippet Mix',
                    weight: 21
                }
            },
            ragnar: {
                name: 'Ragnar',
                toys: ['Backpack', 'Sticks'],
                bio: 'Bird barky ID tag puppy feathers yawn hamster cage wagging toys kitten good boy harness. Spike mouse furry harness sit crate kitty chow water small animals biscuit litter box. Nap smooshy harness wagging drool throw wagging wag tail play dead roll over Scooby snacks walk play dead ball cage stay heel scratcher ferret. Birds barky water dog toys groom cockatiel birds litter pet food cage toys. Fleas Tigger licks window lazy dog treats dog tuxedo kitten feeder dragging nest paws.Cage small animals feathers litter critters gimme five meow pet supplies behavior purr. Purr parrot purr run pet gate vaccination leash carrier. Kibble run fast canary chow pet food bird warm tuxedo puppy Scooby snacks feathers nap heel bird seed parakeet. Fur turtle bark nap carrier nest chow lazy dog throw litter kitty stripes birds good boy toys stripes cat foot. Cage nest fleas lazy dog kisses maine coon cat dog house. Purr litter nap cage lazy dog wag tail Scooby snacks vitamins kibble ferret whiskers pet food gimme five crate fleas furry chow collar slobbery. Litter Box brush tongue treats birds roll over finch water dog kisses throw fish Rover biscuit swimming groom barky pet purr.Lazy Dog scratcher brush paws Rover crate catch wagging brush bird seed toys twine maine coon cat park Scooby snacks. Yawn polydactyl nest collar birds roll over vaccine chew paws bark play dead tongue head puppy pet supplies.',
                image: 'images/ragnar.jpg',
                hobbies: ['Raiding', 'Setting Sail', 'Generally, being awesome'],
                details: {
                    breed: 'Norwegian Elkhound',
                    weight: 75
                }
            },
            sterling: {
                name: 'Sterling',
                toys: ['Stuffed Turtle', 'Flask'],
                bio: 'Chirp food pet aquatic heel cage drool sit litter box lick Scooby snacks paws speak lol catz sit pet meow bedding dragging head. Warm dinnertime gimme five litter box Mittens chew bird puppy play dog bark fish harness dog kibble stripes.Warm chew foot catch vaccination aquarium puppy shake pet supplies bird fluffy stick yawn. Paws heel lazy dog brush chew bedding behavior pet food bird food. Wag Tail yawn ID tag collar dog house walk Tigger right paw head food water dog. Kibble leash maine coon cat Scooby snacks finch brush fish field walk Scooby snacks meow pet food. Fur toys ball walk finch tabby ball running warm feathers nest left paw furry chirp fish Fido ID tag harness. Lazy Dog birds meow pet supplies chow play run fast cage food whiskers vaccine. Fetch aquarium cockatiel slobber small animals carrier head licks crate yawn parakeet scratch collar yawn.',
                image: 'images/sterling.jpg',
                hobbies: ['Voicemails', 'Social Drinking', 'Acting like a puppy still']
            }
        },

        updateHash: function(hash) {
          window.location.hash = hash;
        },

        generateTemplate: function(page) {
          var whichTemplate = page !== 'home' ? 'dog' : 'home';

          var source = $('#'+ whichTemplate +'-template').html();
          // #dog-template, #home-template
          var template = Handlebars.compile(source);
          var context = this.dogs[page];
          var html = template(context);

         $('.content-container').fadeOut('fast', function() {
           $(this).empty().html(html).fadeIn();
         });

        },

        init: function() {
          var self = this;
          this.generateTemplate('home');

          $('nav').on('click', 'li', function() {
            var name = $(this).attr('data-name');
            self.updateHash(name);
            self.generateTemplate(name);

            $(this).addClass('active').siblings().removeClass('active');
          });

          $('header').on('click', 'h1', function() {
            $('li.active').removeClass('active');
            self.updateHash('home');
            self.generateTemplate('home');
          });

          if (window.location.hash) {
            var page = window.location.hash.replace('#','');
            self.generateTemplate(page);
            $('li[data-name='+ page +']').addClass('active');
          }
        }
    };
    fetchLeague.init();
})();
