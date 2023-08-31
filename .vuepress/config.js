import searchPlugin from '@vuepress/plugin-search'
import { defaultTheme, viteBundler } from 'vuepress'

export default ({
  base: '/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'TOH-RE',
      description: 'An Among Us Mod that adds a ton of new roles and settings to the game!',
    },
    '/fr/': {
      lang: 'fr-FR',
      title: 'TOH-RE',
      description: 'Un mod Among Us qui ajoute une tonne de nouveaux rôles et paramètres au jeu!',
    }
  },
  bundler: viteBundler({
    vuePluginOptions: {
      template: {
        compilerOptions: {
          isCustomElement: tag => tag === 'center' || tag === 'font'
        }
      }
    }
  }),
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        },
        '/fr/': {
          placeholder: 'Rechercher',
        }
      },
      maxSuggestions: 10,
    })
  ],
  theme: defaultTheme({
    locales: {
      '/': {
        base: '/',
        navbar: [
          {
            text: 'Roles',
            children: [
              {
                text: 'All Roles',
                link: '/Roles.html',
              },
              {
                text: 'Impostor Roles',
                link: '/options/settings/Impostors.html',
              },
              {
                text: 'Crewmate Roles',
                link: '/options/settings/Crewmates.html',
              },
              {
                text: 'Neutral Roles',
                link: '/options/settings/Neutrals.html',
              },
              {
                text: 'Add-on Roles',
                link: '/options/settings/Addons.html',
              },
              {
                text: 'Experimental Roles',
                link: '/options/settings/Experimental.html',
              },
              {
                text: 'Custom Settings',
                link: '/options/settings/Custom.html',
              },
              {
                text: 'System Settings',
                link: '/options/settings/System.html',
              },
              {
                text: 'Game Settings',
                link: '/options/settings/Game.html',
              },
              {
                text: 'Game Modifiers',
                link: '/options/settings/Modifiers.html',
              },
            ]
          },
          {
            text: 'About',
            link: '/AboutUs.html',
          },
          {
            text: 'Advanced',
            link: '/Advanced.html',
          },
          {
            text: 'Install',
            link: '/GetStarted.html',
          },
          {
            text: 'FAQ',
            link: '/FAQ.html',
          },
        ],
        sidebar: {
          '/options/Addons/Harmful/': [
            { text: 'Back to Addons', link: '/options/settings/Addons.html' },
            { text: 'Avenger', link: '/options/Addons/Harmful/Avenger.html' },
            { text: 'Bewilder', link: '/options/Addons/Harmful/Bewilder.html' },
            { text: 'Diseased', link: '/options/Addons/Harmful/Diseased.html' },
            { text: 'Disregarded', link: '/options/Addons/Harmful/Disregarded.html' },
            { text: 'Fragile', link: '/options/Addons/Harmful/Fragile.html' },
            { text: 'Ghoul', link: '/options/Addons/Harmful/Ghoul.html' },
            { text: 'Oblivious', link: '/options/Addons/Harmful/Oblivious.html' },
            { text: 'Rascal', link: '/options/Addons/Harmful/Rascal.html' },
            { text: 'Sunglasses', link: '/options/Addons/Harmful/Sunglasses.html' },
            { text: 'Unlucky', link: '/options/Addons/Harmful/Unlucky.html' },
            { text: 'Void Ballot', link: '/options/Addons/Harmful/VoidBallot.html' },
            { text: 'Workhorse', link: '/options/Addons/Harmful/Workhorse.html' }
          ],
          '/options/Addons/Helpful/': [
            { text: 'Back to Add-ons', link: '/options/settings/Addons.html' },
            { text: 'Antidote', link: '/options/Addons/Helpful/Antidote.html' },
            { text: 'Autopsy', link: '/options/Addons/Helpful/Autopsy.html' },
            { text: 'Aware', link: '/options/Addons/Helpful/Aware.html' },
            { text: 'Bait', link: '/options/Addons/Helpful/Bait.html' },
            { text: 'Beartrap', link: '/options/Addons/Helpful/Beartrap.html' },
            { text: 'Burst', link: '/options/Addons/Helpful/Burst.html' },
            { text: 'DoubleShot', link: '/options/Addons/Helpful/DoubleShot.html' },
            { text: 'Glow', link: '/options/Addons/Helpful/Glow.html' },
            { text: 'Gravestone', link: '/options/Addons/Helpful/Gravestone.html' },
            { text: 'Guesser', link: '/options/Addons/Helpful/Guesser.html' },
            { text: 'Lazy', link: '/options/Addons/Helpful/Lazy.html' },
            { text: 'Loyal', link: '/options/Addons/Helpful/Loyal.html' },
            { text: 'Lucky', link: '/options/Addons/Helpful/Lucky.html' },
            { text: 'Necroview', link: '/options/Addons/Helpful/Necroview.html' },
            { text: 'Nimble', link: '/options/Addons/Helpful/Nimble.html' },
            { text: 'Reach', link: '/options/Addons/Helpful/Reach.html' },
            { text: 'Schizophrenic', link: '/options/Addons/Helpful/Schizophrenic.html' },
            { text: 'Seer', link: '/options/Addons/Helpful/Seer.html' },
            { text: 'Sleuth', link: '/options/Addons/Helpful/Sleuth.html' },
            { text: 'Torch', link: '/options/Addons/Helpful/Torch.html' },
            { text: 'Tiebreaker', link: '/options/Addons/Helpful/Tiebreaker.html' },
            { text: 'Watcher', link: '/options/Addons/Helpful/Watcher.html' }
          ],
          '/options/Addons/Impostor/': [
            { text: 'Back to Add-ons', link: '/options/settings/Addons.html' },
            { text: 'Clumsy', link: '/options/Addons/Impostor/Clumsy.html' },
            { text: 'Last Impostor', link: '/options/Addons/Impostor/LastImpostor.html' },
            { text: 'Madmate', link: '/options/Addons/Impostor/Madmate.html' },
            { text: 'Mare', link: '/options/Addons/Impostor/Mare.html' },
            { text: 'Mimic', link: '/options/Addons/Impostor/Mimic.html' },
            { text: 'Stealer', link: '/options/Addons/Impostor/Stealer.html' },
            { text: 'Swift', link: '/options/Addons/Impostor/Swift.html' },
          ],
          '/options/Addons/Neutral/': [
            { text: 'Back to Add-ons', link: '/options/settings/Addons.html' },
            { text: 'Egoist', link: '/options/Addons/Neutral/Egoist.html' },
            { text: 'Lovers', link: '/options/Addons/Neutral/Lovers.html' },
          ],
          '/options/Crewmates/Basic/': [
            { text: 'Back to Crewmates', link: '/options/settings/Crewmates.html' },
            { text: 'Addict', link: '/options/Crewmates/Basic/Addict.html' },
            { text: 'Celebrity', link: '/options/Crewmates/Basic/Celebrity.html' },
            { text: 'Cleanser', link: '/options/Crewmates/Basic/Cleanser.html' },
            { text: 'Doctor', link: '/options/Crewmates/Basic/Doctor.html' },
            { text: 'Lazy Guy', link: '/options/Crewmates/Basic/LazyGuy.html' },
            { text: 'Luckey', link: '/options/Crewmates/Basic/Luckey.html' },
            { text: 'Super Star', link: '/options/Crewmates/Basic/SuperStar.html' },
            { text: 'Tracefinder', link: '/options/Crewmates/Basic/Tracefinder.html' },
            { text: 'Transporter', link: '/options/Crewmates/Basic/Transporter.html' },
          ],
          '/options/Crewmates/Killing/': [
            { text: 'Back to Crewmates', link: '/options/settings/Crewmates.html' },
            { text: 'Bodyguard', link: '/options/Crewmates/Killing/Bodyguard.html' },
            { text: 'Crusader', link: '/options/Crewmates/Killing/Crusader.html' },
            { text: 'Deceiver', link: '/options/Crewmates/Killing/Deceiver.html' },
            { text: 'Knight', link: '/options/Crewmates/Killing/Knight.html' },
            { text: 'Retributionist', link: '/options/Crewmates/Killing/Retributionist.html' },
            { text: 'Reverie', link: '/options/Crewmates/Killing/Reverie.html' },
            { text: 'Sheriff', link: '/options/Crewmates/Killing/Sheriff.html' },
            { text: 'Veteran', link: '/options/Crewmates/Killing/Veteran.html' },
            { text: 'Vigilante', link: '/options/Crewmates/Killing/Vigilante.html' },
            { text: 'Witness', link: '/options/Crewmates/Killing/Witness.html' },
          ],
          '/options/Crewmates/Power/': [
            { text: 'Back to Crewmates', link: '/options/settings/Crewmates.html' },
            { text: 'Copycat', link: '/options/Crewmates/Power/Copycat.html' },
            { text: 'Dictator', link: '/options/Crewmates/Power/Dictator.html' },
            { text: 'Guardian', link: '/options/Crewmates/Power/Guardian.html' },
            { text: 'Judge', link: '/options/Crewmates/Power/Judge.html' },
            { text: 'Lookout', link: '/options/Crewmates/Power/Lookout.html' },
            { text: 'Marshall', link: '/options/Crewmates/Power/Marshall.html' },
            { text: 'Mayor', link: '/options/Crewmates/Power/Mayor.html' },
            { text: 'Monarch', link: '/options/Crewmates/Power/Monarch.html' },
            { text: 'Overseer', link: '/options/Crewmates/Power/Overseer.html' },
            { text: 'Telecommunication', link: '/options/Crewmates/Power/Telecommunication.html' },
          ],
          '/options/Crewmates/Support/': [
            { text: 'Back to Crewmates', link: '/options/settings/Crewmates.html' },
            { text: 'Admirer', link: '/options/Crewmates/Support/Admirer.html' },
            { text: 'Chameleon', link: '/options/Crewmates/Support/Chameleon.html' },
            { text: 'Coroner', link: '/options/Crewmates/Support/Coroner.html' },
            { text: 'Deputy', link: '/options/Crewmates/Support/Deputy.html' },
            { text: 'Detective', link: '/options/Crewmates/Support/Detective.html' },
            { text: 'Fortune Teller', link: '/options/Crewmates/Support/FortuneTeller.html' },
            { text: 'Grenadier', link: '/options/Crewmates/Support/Grenadier.html' },
            { text: 'Inspector', link: '/options/Crewmates/Support/Inspector.html' },
            { text: 'Lighter', link: '/options/Crewmates/Support/Lighter.html' },
            { text: 'Mechanic', link: '/options/Crewmates/Support/Mechanic.html' },
            { text: 'Medic', link: '/options/Crewmates/Support/Medic.html' },
            { text: 'Medium', link: '/options/Crewmates/Support/Medium.html' },
            { text: 'Merchant', link: '/options/Crewmates/Support/Merchant.html' },
            { text: 'Mortician', link: '/options/Crewmates/Support/Mortician.html' },
            { text: 'Observer', link: '/options/Crewmates/Support/Observer.html' },
            { text: 'Oracle', link: '/options/Crewmates/Support/Oracle.html' },
            { text: 'Pacifist', link: '/options/Crewmates/Support/Pacifist.html' },
            { text: 'Paranoid', link: '/options/Crewmates/Support/Paranoid.html' },
            { text: 'Psychic', link: '/options/Crewmates/Support/Psychic.html' },
            { text: 'Snitch', link: '/options/Crewmates/Support/Snitch.html' },
            { text: 'Spiritualist', link: '/options/Crewmates/Support/Spiritualist.html' },
            { text: 'Time Manager', link: '/options/Crewmates/Support/TimeManager.html' },
            { text: 'Time Master', link: '/options/Crewmates/Support/TimeMaster.html' },
            { text: 'Tracker', link: '/options/Crewmates/Support/Tracker.html' },
          ],
          '/options/Experimental/Addon/': [
            { text: 'Back to Experimental', link: '/options/settings/Experimental.html' },
            { text: 'Fool', link: '/options/Experimental/Addon/Fool.html' },
            { text: 'Neptune', link: '/options/Experimental/Addon/Neptune.html' },
            { text: 'YouTuber', link: '/options/Experimental/Addon/YouTuber.html' },
          ],
          '/options/Experimental/Crewmate/': [
            { text: 'Back to Experimental', link: '/options/settings/Experimental.html' },
          ],
          '/options/Experimental/Impostor/': [
            { text: 'Back to Experimental', link: '/options/settings/Experimental.html' },
            { text: 'Butcher', link: '/options/Experimental/Impostor/Butcher.html' },
            { text: 'Capitalist', link: '/options/Experimental/Impostor/Capitalist.html' },
            { text: 'Disperser', link: '/options/Experimental/Impostor/Disperser.html' },
            { text: 'Eraser', link: '/options/Experimental/Impostor/Eraser.html' },
            { text: 'Killing Machine', link: '/options/Experimental/Impostor/KillingMachine.html' },
            { text: 'Lightning', link: '/options/Experimental/Impostor/Lightning.html' },
            { text: 'Trapster', link: '/options/Experimental/Impostor/Trapster.html' },
          ],
          '/options/Experimental/Neutral/': [
            { text: 'Back to Experimental', link: '/options/settings/Experimental.html' },
            { text: 'God', link: '/options/Experimental/Neutral/God.html' },
            { text: 'Spiritcaller', link: '/options/Experimental/Neutral/Spiritcaller.html' },
          ],
          '/options/Impostors/Concealing/': [
            { text: 'Back to Impostors', link: '/options/settings/Impostors.html' },
            { text: 'Escapist', link: '/options/Impostors/Concealing/Escapist.html' },
            { text: 'Miner', link: '/options/Impostors/Concealing/Miner.html' },
            { text: 'Puppeteer', link: '/options/Impostors/Concealing/Puppeteer.html' },
            { text: 'Scavenger', link: '/options/Impostors/Concealing/Scavenger.html' },
            { text: 'Shapemaster', link: '/options/Impostors/Concealing/Shapemaster.html' },
            { text: 'Soul Catcher', link: '/options/Impostors/Concealing/SoulCatcher.html' },
            { text: 'Swooper', link: '/options/Impostors/Concealing/Swooper.html' },
            { text: 'Trickster', link: '/options/Impostors/Concealing/Trickster.html' },
            { text: 'Vampire', link: '/options/Impostors/Concealing/Vampire.html' },
            { text: 'Warlock', link: '/options/Impostors/Concealing/Warlock.html' },
            { text: 'Wildling', link: '/options/Impostors/Concealing/Wildling.html' },
          ],
          '/options/Impostors/Hindering/': [
            { text: 'Back to Impostors', link: '/options/settings/Impostors.html' },
            { text: 'Anonymous', link: '/options/Impostors/Hindering/Anonymous.html' },
            { text: 'Dazzler', link: '/options/Impostors/Hindering/Dazzler.html' },
            { text: 'Devourer', link: '/options/Impostors/Hindering/Devourer.html' },
            { text: 'Pifall', link: '/options/Impostors/Hindering/Pitfall.html' },
            { text: 'Twister', link: '/options/Impostors/Hindering/Twister.html' },
          ],
          '/options/Impostors/Killing/': [
            { text: 'Back to Impostors', link: '/options/settings/Impostors.html' },
            { text: 'Agent', link: '/options/Impostors/Killing/Agent.html' },
            { text: 'Arrogance', link: '/options/Impostors/Killing/Arrogance.html' },
            { text: 'Assassin', link: '/options/Impostors/Killing/Assassin.html' },
            { text: 'Berserker', link: '/options/Impostors/Killing/Berserker.html' },
            { text: 'Bomber', link: '/options/Impostors/Killing/Bomber.html' },
            { text: 'Bounty Hunter', link: '/options/Impostors/Killing/BountyHunter.html' },
            { text: 'Councillor', link: '/options/Impostors/Killing/Councillor.html' },
            { text: 'Cursed Wolf', link: '/options/Impostors/Killing/CursedWolf.html' },
            { text: 'Deathpact', link: '/options/Impostors/Killing/Deathpact.html' },
            { text: 'Greedy', link: '/options/Impostors/Killing/Greedy.html' },
            { text: 'Hangman', link: '/options/Impostors/Killing/Hangman.html' },
            { text: 'Inhibitor', link: '/options/Impostors/Killing/Inhibitor.html' },
            { text: 'Ludopath', link: '/options/Impostors/Killing/Ludopath.html' },
            { text: 'Lurker', link: '/options/Impostors/Killing/Lurker.html' },
            { text: 'Mercenary', link: '/options/Impostors/Killing/Mercenary.html' },
            { text: 'Ninja', link: '/options/Impostors/Killing/Ninja.html' },
            { text: 'Quick Shooter', link: '/options/Impostors/Killing/QuickShooter.html' },
            { text: 'Saboteur', link: '/options/Impostors/Killing/Saboteur.html' },
            { text: 'Sniper', link: '/options/Impostors/Killing/Sniper.html' },
            { text: 'Spellcaster', link: '/options/Impostors/Killing/Spellcaster.html' },
            { text: 'Underdog', link: '/options/Impostors/Killing/Underdog.html' }
          ],
          '/options/Impostors/Madmate/': [
            { text: 'Back to Impostors', link: '/options/settings/Impostors.html' },
            { text: 'Crewposter', link: '/options/Impostors/Madmate/Crewposter.html' },
            { text: 'Parasite', link: '/options/Impostors/Madmate/Parasite.html' },
          ],
          '/options/Impostors/Support/': [
            { text: 'Back to Impostors', link: '/options/settings/Impostors.html' },
            { text: 'Camouflager', link: '/options/Impostors/Support/Camouflager.html' },
            { text: 'Cleaner', link: '/options/Impostors/Support/Cleaner.html' },
            { text: 'Consigliere', link: '/options/Impostors/Support/Consigliere.html' },
            { text: 'Disruptor', link: '/options/Impostors/Support/Disruptor.html' },
            { text: 'Fireworker', link: '/options/Impostors/Support/Fireworker.html' },
            { text: 'Gangster', link: '/options/Impostors/Support/Gangster.html' },
            { text: 'Godfather', link: '/options/Impostors/Support/Godfather.html' },
            { text: 'Morphling', link: '/options/Impostors/Support/Morphling.html' },
            { text: 'Nemesis', link: '/options/Impostors/Support/Nemesis.html' },
            { text: 'Time Thief', link: '/options/Impostors/Support/TimeThief.html' },
            { text: 'Vindicator', link: '/options/Impostors/Support/Vindicator.html' },
            { text: 'Visionary', link: '/options/Impostors/Support/Visionary.html' },
          ],
          '/options/Neutrals/Benign': [
            { text: 'Back to Neutrals', link: '/options/settings/Neutrals.html' },
            { text: 'Amnesiac', link: '/options/Neutrals/Benign/Amnesiac.html' },
            { text: 'Follower', link: '/options/Neutrals/Benign/Follower.html' },
            { text: 'Hater', link: '/options/Neutrals/Benign/Hater.html' },
            { text: 'Lawyer', link: '/options/Neutrals/Benign/Lawyer.html' },
            { text: 'Maverick', link: '/options/Neutrals/Benign/Maverick.html' },
            { text: 'Opportunist', link: '/options/Neutrals/Benign/Opportunist.html' },
            { text: 'Pursuer', link: '/options/Neutrals/Benign/Pursuer.html' },
            { text: 'Romantic', link: '/options/Neutrals/Benign/Romantic.html', children: [
              { text: 'Vengeful Romantic', link: '/options/Neutrals/Benign/RomanticVengeful.html' },
              { text: 'Ruthless Romantic', link: '/options/Neutrals/Benign/RomanticRuthless.html' },
            ]},
            { text: 'Shaman', link: '/options/Neutrals/Benign/Shaman.html' },
            { text: 'Witch', link: '/options/Neutrals/Benign/Witch.html' },
          ],
          '/options/Neutrals/Chaos': [
            { text: 'Back to Neutrals', link: '/options/settings/Neutrals.html' },
            { text: 'Collector', link: '/options/Neutrals/Chaos/Collector.html' },
            { text: 'Cultist', link: '/options/Neutrals/Chaos/Cultist.html' },
            { text: 'Phantom', link: '/options/Neutrals/Chaos/Phantom.html' },
            { text: 'Pirate', link: '/options/Neutrals/Chaos/Pirate.html' },
            { text: 'Provocateur', link: '/options/Neutrals/Chaos/Provocateur.html' },
            { text: 'Revolutionist', link: '/options/Neutrals/Chaos/Revolutionist.html' },
            { text: 'Soul Collector', link: '/options/Neutrals/Chaos/SoulCollector.html' },
            { text: 'Terrorist', link: '/options/Neutrals/Chaos/Terrorist.html' },
            { text: 'Vector', link: '/options/Neutrals/Chaos/Vector.html' },
            { text: 'Vulture', link: '/options/Neutrals/Chaos/Vulture.html' },
            { text: 'Workaholic', link: '/options/Neutrals/Chaos/Workaholic.html' },
          ],
          '/options/Neutrals/Evil/': [
            { text: 'Back to Neutrals', link: '/options/settings/Neutrals.html' },
            { text: 'Cursed Soul', link: '/options/Neutrals/Evil/CursedSoul.html' },
            { text: 'Demon', link: '/options/Neutrals/Evil/Demon.html' },
            { text: 'Doomsayer', link: '/options/Neutrals/Evil/Doomsayer.html' },
            { text: 'Executioner', link: '/options/Neutrals/Evil/Executioner.html' },
            { text: 'Innocent', link: '/options/Neutrals/Evil/Innocent.html' },
            { text: 'Jester', link: '/options/Neutrals/Evil/Jester.html' },
            { text: 'Masochist', link: '/options/Neutrals/Evil/Masochist.html' },
            { text: 'Seeker', link: '/options/Neutrals/Evil/Seeker.html' },
          ],
          '/options/Neutrals/Killing/': [
            { text: 'Back to Neutrals', link: '/options/settings/Neutrals.html' },
            { text: 'Agitator', link: '/options/Neutrals/Killing/Agitator.html' },
            { text: 'Arsonist', link: '/options/Neutrals/Killing/Arsonist.html' },
            { text: 'Blood Knight', link: '/options/Neutrals/Killing/BloodKnight.html' },
            { text: 'Glitch', link: '/options/Neutrals/Killing/Glitch.html' },
            { text: 'Infectious', link: '/options/Neutrals/Killing/Infectious.html' },
            { text: 'Jackal', link: '/options/Neutrals/Killing/Jackal.html' },
            { text: 'Juggernaut', link: '/options/Neutrals/Killing/Juggernaut.html' },
            { text: 'Occultist', link: '/options/Neutrals/Killing/Occultist.html' },
            { text: 'Pelican', link: '/options/Neutrals/Killing/Pelican.html' },
            { text: 'Pickpocket', link: '/options/Neutrals/Killing/Pickpocket.html' },
            { text: 'Plaguebearer', link: '/options/Neutrals/Killing/Plaguebearer.html' },
            { text: 'Serial Killer', link: '/options/Neutrals/Killing/SerialKiller.html' },
            { text: 'Shade', link: '/options/Neutrals/Killing/Shade.html' },
            { text: 'Shroud', link: '/options/Neutrals/Killing/Shroud.html' },
            { text: 'Stalker', link: '/options/Neutrals/Killing/Stalker.html' },
            { text: 'Traitor', link: '/options/Neutrals/Killing/Traitor.html' },
            { text: 'Virus', link: '/options/Neutrals/Killing/Virus.html' },
            { text: 'Werewolf', link: '/options/Neutrals/Killing/Werewolf.html' },
          ],
          '/options/Coven/': [
            { text: 'Back to Coven', link: '/options/settings/Coven.html' },
            { text: 'Banshee', link: '/options/Coven/Banshee.html' },
            { text: 'Coven Leader', link: '/options/Coven/CovenLeader.html' },
            { text: 'Hex Master', link: '/options/Coven/HexMaster.html' },
            { text: 'Jinx', link: '/options/Coven/Jinx.html' },
            { text: 'Medusa', link: '/options/Coven/Medusa.html' },
            { text: 'Necromancer', link: '/options/Coven/Necromancer.html' },
            { text: 'Poisoner', link: '/options/Coven/Poisoner.html' },
            { text: 'Potion Master', link: '/options/Coven/PotionMaster.html' },
            { text: 'Ritualist', link: '/options/Coven/Ritualist.html' },
            { text: 'Wraith', link: '/options/Coven/Wraith.html' },
          ],
          '/options/settings/': [
            { text: 'Custom Settings', link: '/options/settings/Custom.html' },
            { text: 'System Settings', link: '/options/settings/System.html'},
            { text: 'Game Settings', link: '/options/settings/Game.html'},
            { text: 'Game Modifiers', link: '/options/settings/Modifiers.html'},
            { text: 'Impostors', link: '/options/settings/Impostors.html'},
            { text: 'Crewmates', link: '/options/settings/Crewmates.html'},
            { text: 'Neutrals', link: '/options/settings/Neutrals.html'},
            { text: 'Coven', link: '/options/settings/Coven.html'},
            { text: 'Add-ons', link: '/options/settings/Addons.html'},
            { text: 'Experimental', link: '/options/settings/Experimental.html'},
          ],
        },
        repo: '0xDrMoe/TOHRE-Code',
        repoLabel: 'Contribute!',
        docsRepo: '0xDrMoe/TOHRE-Code',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: 'Contribute to this page on GitHub!',
        notFound: [
          'Where are you going?',
          'Huh? How did you end up here?',
          'Honestly, how did you get here?',
          'This is not the page you are looking for.',
          'Nothing to see here.',
          'Nope. Not here.',
          'Whatever you\'re looking for, it\'s not here.'
        ],
        backToHome: 'Take me back to my safe space please.',
        toggleColorMode: 'Toggle Color Scheme',
        selectLanguageName: 'English',
      },
      '/fr/': {
        base: '/fr/',
        navbar: [
          {
            text: 'Les Rôles',
            children: [
              {
                text: 'Tous les Rôles',
                link: 'Roles.html',
              },
              {
                text: 'Rôles d\'Imposteur',
                link: 'options/settings/Impostors.html',
              },
              {
                text: 'Rôles d\'Équipier',
                link: 'options/settings/Crewmates.html',
              },
              {
                text: 'Rôles Neutres',
                link: 'options/settings/Neutrals.html',
              },
              {
                text: 'Rôles Add-on',
                link: 'options/settings/Addons.html',
              },
              {
                text: 'Rôles Expérimentaux',
                link: 'options/settings/Experimental.html',
              },
              {
                text: 'Paramètres Personnalisés',
                link: 'options/settings/Custom.html',
              },
              {
                text: 'Paramètres de Jeu',
                link: 'options/settings/Game.html',
              },
              {
                text: 'Modificateurs de Jeu',
                link: 'options/settings/Modifiers.html',
              },
            ]
          },
          {
            text: 'À Propos',
            link: 'AboutUs.html',
          },
          {
            text: 'Avancé',
            link: 'Advanced.html',
          },
          {
            text: 'Installer',
            link: 'GetStarted.html',
          },
          {
            text: 'FAQ',
            link: 'FAQ.html',
          },
        ],
        repo: '0xDrMoe/TOHRE-Code',
        repoLabel: 'Contribuer!',
        docsRepo: '0xDrMoe/TOHRE-Code',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: 'Aidez-nous à améliorer cette page!',
        notFound: [
          'Où allez-vous?',
          'Huh? Comment êtes-vous arrivé ici?',
          'Honnêtement, comment êtes-vous arrivé ici?',
          'Ce n\'est pas la page que vous recherchez.',
          'Rien à voir ici.',
          'Non. Pas ici.',
          'Quoi que vous cherchiez, ce n\'est pas ici.'
        ],
        backToHome: 'Ramenez-moi dans mon espace sécurisé s\'il vous plaît.',
        toggleColorMode: 'Basculer le mode couleur',
        selectLanguageName: 'French',
      },
    }
  })
})