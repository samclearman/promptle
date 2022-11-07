import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const wordlist = ['act', 'air', 'ant', 'arm', 'art', 'bag', 'bat', 'bed', 'bee', 'bit', 'box', 'boy', 'bun', 'can', 'cap', 'car', 'cat', 'cow', 'cry', 'cub', 'cup', 'dad', 'day', 'dog', 'ear', 'egg', 'end', 'eye', 'fan', 'fly', 'fog', 'gun', 'hat', 'hen', 'hot', 'ice', 'ink', 'jam', 'jar', 'key', 'leg', 'lip', 'low', 'man', 'map', 'men', 'mom', 'net', 'nut', 'oil', 'owl', 'pan', 'pen', 'pet', 'pie', 'pig', 'pin', 'pot', 'rat', 'ray', 'rod', 'rub', 'run', 'sea', 'sky', 'son', 'spy', 'sun', 'tax', 'tin', 'toe', 'top', 'toy', 'tub', 'use', 'van', 'war', 'wax', 'way', 'yak', 'yam', 'zoo', 'ants', 'arch', 'army', 'aunt', 'baby', 'back', 'bait', 'ball', 'band', 'base', 'bath', 'bead', 'beam', 'bean', 'bear', 'beds', 'beef', 'bell', 'bike', 'bird', 'bite', 'blow', 'boat', 'body', 'bomb', 'bone', 'book', 'boot', 'boys', 'bulb', 'burn', 'cake', 'camp', 'card', 'care', 'cars', 'cart', 'cast', 'cats', 'cave', 'cent', 'chin', 'clam', 'club', 'coal', 'coat', 'coil', 'comb', 'cook', 'copy', 'cord', 'cork', 'corn', 'cows', 'crib', 'crow', 'debt', 'deer', 'desk', 'dime', 'dirt', 'dock', 'dogs', 'doll', 'door', 'drop', 'drug', 'drum', 'duck', 'dust', 'edge', 'eggs', 'eyes', 'face', 'fact', 'fall', 'fang', 'farm', 'fear', 'feet', 'fire', 'fish', 'flag', 'fold', 'food', 'foot', 'fork', 'form', 'fowl', 'frog', 'fuel', 'game', 'gate', 'girl', 'glue', 'goat', 'gold', 'grip', 'hair', 'hall', 'hand', 'hate', 'head', 'heat', 'help', 'hill', 'hole', 'home', 'hook', 'hope', 'horn', 'hose', 'hour', 'idea', 'iron', 'jail', 'join', 'joke', 'jump', 'kick', 'kiss', 'kite', 'knee', 'knot', 'lace', 'lake', 'lamp', 'land', 'lead', 'leaf', 'legs', 'lift', 'line', 'list', 'loaf', 'lock', 'look', 'loss', 'love', 'maid', 'mark', 'mask', 'mass', 'meal', 'meat', 'mice', 'milk', 'mind', 'mine', 'mint', 'mist', 'moon', 'move', 'nail', 'name', 'neck', 'need', 'nest', 'news', 'nose', 'note', 'oven', 'page', 'pail', 'pain', 'park', 'part', 'pear', 'pest', 'pets', 'pies', 'pigs', 'pipe', 'play', 'plot', 'pull', 'pump', 'push', 'rail', 'rain', 'rake', 'rate', 'rest', 'rice', 'ring', 'road', 'rock', 'roll', 'roof', 'room', 'root', 'rose', 'rule', 'sack', 'sail', 'salt', 'sand', 'seat', 'seed', 'self', 'ship', 'shoe', 'shop', 'show', 'side', 'sign', 'silk', 'sink', 'size', 'skin', 'slip', 'snow', 'soap', 'sock', 'soda', 'sofa', 'song', 'sort', 'soup', 'spot', 'star', 'stem', 'step', 'stew', 'stop', 'suit', 'swim', 'tail', 'talk', 'tank', 'team', 'tent', 'test', 'time', 'toad', 'toes', 'town', 'toys', 'tray', 'tree', 'trip', 'turn', 'twig', 'unit', 'vase', 'veil', 'vein', 'vest', 'view', 'walk', 'wall', 'wash', 'wave', 'week', 'whip', 'wind', 'wine', 'wing', 'wire', 'wish', 'wood', 'wool', 'word', 'work', 'worm', 'wren', 'yard', 'yarn', 'year', 'yoke', 'zinc', 'actor', 'alarm', 'alley', 'anger', 'angle', 'apple', 'badge', 'balls', 'basin', 'bears', 'beast', 'bells', 'berry', 'bikes', 'birds', 'birth', 'blade', 'blood', 'board', 'boats', 'books', 'brain', 'brake', 'brass', 'bread', 'brick', 'brush', 'burst', 'cable', 'cakes', 'cause', 'chain', 'chair', 'chalk', 'chess', 'class', 'clock', 'cloth', 'cloud', 'coach', 'coast', 'color', 'cough', 'cover', 'crack', 'crate', 'cream', 'crime', 'crook', 'crowd', 'crown', 'crush', 'curve', 'death', 'dolls', 'drain', 'dress', 'drink', 'ducks', 'earth', 'elbow', 'error', 'event', 'feast', 'field', 'fifth', 'fight', 'flame', 'flesh', 'flock', 'floor', 'force', 'frame', 'frogs', 'front', 'fruit', 'geese', 'ghost', 'girls', 'glass', 'glove', 'goose', 'grade', 'grain', 'grape', 'grass', 'group', 'guide', 'hands', 'heart', 'honey', 'horse', 'house', 'humor', 'jeans', 'jelly', 'jewel', 'judge', 'juice', 'kitty', 'knife', 'laugh', 'level', 'light', 'limit', 'linen', 'lunch', 'magic', 'match', 'metal', 'money', 'month', 'mouth', 'music', 'nerve', 'night', 'noise', 'north', 'ocean', 'offer', 'order', 'owner', 'paint', 'paper', 'party', 'paste', 'patch', 'peace', 'place', 'plane', 'plant', 'plate', 'point', 'power', 'price', 'print', 'prose', 'queen', 'quiet', 'quill', 'quilt', 'range', 'rifle', 'rings', 'river', 'robin', 'route', 'scale', 'scarf', 'scene', 'scent', 'screw', 'sense', 'shade', 'shake', 'shame', 'shape', 'sheep', 'sheet', 'shelf', 'shirt', 'shock', 'shoes', 'skate', 'skirt', 'slave', 'sleep', 'sleet', 'slope', 'smash', 'smell', 'smile', 'smoke', 'snail', 'snake', 'songs', 'sound', 'space', 'spade', 'spark', 'spoon', 'stage', 'stamp', 'start', 'steam', 'steel', 'stick', 'stone', 'store', 'story', 'stove', 'straw', 'sugar', 'swing', 'table', 'taste', 'teeth', 'thing', 'thumb', 'tiger', 'title', 'tooth', 'touch', 'trade', 'trail', 'train', 'tramp', 'trees', 'trick', 'truck', 'twist', 'uncle', 'value', 'verse', 'voice', 'waste', 'watch', 'water', 'waves', 'wheel', 'woman', 'women', 'wound', 'wrist', 'zebra', 'action', 'advice', 'amount', 'animal', 'answer', 'apples', 'attack', 'babies', 'banana', 'basket', 'battle', 'beetle', 'beggar', 'belief', 'border', 'bottle', 'branch', 'breath', 'bridge', 'bubble', 'bucket', 'bushes', 'butter', 'button', 'cactus', 'camera', 'cannon', 'canvas', 'cattle', 'celery', 'cellar', 'chairs', 'chance', 'change', 'cheese', 'cherry', 'church', 'circle', 'clocks', 'clouds', 'clover', 'cobweb', 'collar', 'copper', 'crayon', 'credit', 'degree', 'design', 'desire', 'detail', 'dinner', 'doctor', 'donkey', 'drawer', 'effect', 'eggnog', 'engine', 'expert', 'family', 'farmer', 'father', 'father', 'faucet', 'finger', 'finger', 'flavor', 'flight', 'flower', 'friend', 'garden', 'giants', 'ground', 'growth', 'guitar', 'hammer', 'harbor', 'health', 'horses', 'houses', 'icicle', 'income', 'insect', 'island', 'kettle', 'kitten', 'lawyer', 'letter', 'liquid', 'locket', 'lumber', 'marble', 'market', 'memory', 'middle', 'minute', 'mitten', 'monkey', 'mother', 'motion', 'muscle', 'nation', 'needle', 'number', 'office', 'orange', 'parcel', 'parent', 'pencil', 'person', 'pickle', 'pizzas', 'planes', 'plants', 'plough', 'pocket', 'poison', 'police', 'polish', 'porter', 'potato', 'powder', 'prison', 'profit', 'quartz', 'quince', 'quiver', 'rabbit', 'reason', 'recess', 'record', 'regret', 'reward', 'rhythm', 'riddle', 'school', 'silver', 'sister', 'snails', 'snakes', 'sneeze', 'sponge', 'spring', 'square', 'sticks', 'stitch', 'stream', 'street', 'string', 'summer', 'system', 'temper', 'theory', 'things', 'thread', 'thrill', 'throat', 'throne', 'ticket', 'tongue', 'trains', 'trucks', 'turkey', 'vessel', 'voyage', 'wealth', 'weight', 'window', 'winter', 'wrench', 'writer', 'zephyr', 'zipper', 'account', 'airport', 'apparel', 'attempt', 'balance', 'balloon', 'bedroom', 'believe', 'brother', 'cabbage', 'caption', 'channel', 'chicken', 'comfort', 'company', 'control', 'country', 'cracker', 'creator', 'current', 'curtain', 'cushion', 'disease', 'disgust', 'driving', 'example', 'fairies', 'feather', 'feeling', 'fiction', 'fireman', 'flowers', 'friends', 'giraffe', 'haircut', 'harmony', 'hearing', 'history', 'hobbies', 'holiday', 'hydrant', 'impulse', 'journey', 'kittens', 'laborer', 'ladybug', 'leather', 'letters', 'lettuce', 'library', 'lizards', 'machine', 'mailbox', 'manager', 'measure', 'meeting', 'morning', 'oatmeal', 'opinion', 'oranges', 'pancake', 'partner', 'payment', 'picture', 'plastic', 'popcorn', 'process', 'produce', 'protest', 'purpose', 'quarter', 'rabbits', 'railway', 'reading', 'receipt', 'request', 'respect', 'science', 'servant', 'sisters', 'society', 'spiders', 'station', 'stomach', 'stretch', 'support', 'sweater', 'texture', 'thought', 'thunder', 'trouble', 'visitor', 'volcano', 'weather', 'whistle', 'writing', 'achiever', 'activity', 'addition', 'airplane', 'approval', 'argument', 'baseball', 'beginner', 'behavior', 'birthday', 'boundary', 'brothers', 'building', 'business', 'calendar', 'carriage', 'cemetery', 'cherries', 'chickens', 'children', 'creature', 'daughter', 'decision', 'distance', 'division', 'downtown', 'exchange', 'friction', 'goldfish', 'good-bye', 'governor', 'hospital', 'increase', 'industry', 'interest', 'language', 'learning', 'minister', 'mountain', 'notebook', 'ornament', 'pleasure', 'position', 'property', 'question', 'reaction', 'relation', 'religion', 'scissors', 'seashore', 'sidewalk', 'squirrel', 'stocking', 'stranger', 'surprise', 'teaching', 'tendency', 'tomatoes', 'trousers', 'umbrella', 'vacation', 'acoustics', 'aftermath', 'afternoon', 'agreement', 'amusement', 'apparatus', 'appliance', 'attention', 'authority', 'breakfast', 'carpenter', 'committee', 'condition', 'digestion', 'dinosaurs', 'direction', 'discovery', 'education', 'existence', 'expansion', 'furniture', 'insurance', 'invention', 'jellyfish', 'knowledge', 'lunchroom', 'operation', 'passenger', 'pollution', 'quicksand', 'rainstorm', 'scarecrow', 'secretary', 'selection', 'statement', 'structure', 'substance', 'territory', 'transport', 'treatment', 'underwear', 'vegetable', 'adjustment', 'arithmetic', 'attraction', 'basketball', 'calculator', 'comparison', 'connection', 'discussion', 'earthquake', 'experience', 'government', 'instrument', 'plantation', 'playground', 'punishment', 'suggestion', 'toothbrush', 'toothpaste', 'volleyball', 'wilderness', 'competition', 'destruction', 'development', 'grandfather', 'grandmother', 'observation', 'afterthought', 'distribution', 'organization', 'advertisement', 'representative']
function randomWord() {
  return wordlist[Math.floor(Math.random() * wordlist.length)];
}
let words = [];
for (let i = 0; i < 5; i++) {
  words.push(randomWord());
}
words = words.join(" ");

function App() {
  const [apiKey, setApiKey] = useState(null)
  const [pendingApiKey, setPendingApiKey] = useState(null);
  const [goal, setGoal] = useState(null);
  const [guesses, setGuesses] = useState([]);
  const [responses, setResponses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!apiKey) {
      if (window.localStorage.getItem('apiKey')) {
        setApiKey(window.localStorage.getItem('apiKey'));
      }
      return;
    }
    (async () => {
      const response = await fetch("https://api.openai.com/v1/images/generations", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({ "prompt": words, "n": 1, "size": "512x512" })
      });
      const result = await response.json();
      setGoal(result.data[0].url);
      setLoading(false);
    })()
  }, [apiKey]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const lastGuess = guesses.findLast(() => true);
      if (lastGuess) {
        const truth = new Set(words.split(' '));
        const guessed = lastGuess.split(' ');
        const correct = [...guessed].filter((x) => truth.has(x));
        const wrong = [...guessed].filter((x) => !truth.has(x));
        const [response_correct, response_wrong] = await Promise.all([correct.length ? fetch("https://api.openai.com/v1/images/generations", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
          },
          body: JSON.stringify({ "prompt": correct.join(" "), "n": 1, "size": "512x512" })
        }) : null , wrong.length ? fetch("https://api.openai.com/v1/images/generations", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
          },
          body: JSON.stringify({ "prompt": wrong.join(" "), "n": 1, "size": "512x512" })
        }) : null]);
        const result_correct = await response_correct?.json();
        const result_wrong = await response_wrong?.json();
        setResponses([
          ...responses,
          { 
            guess: lastGuess,
            correctWords: correct,
            correctImage: result_correct?.data?.[0].url ?? '', 
            wrongWords: wrong, 
            wrongImage: result_wrong?.data?.[0].url ?? '',
          }
        ]);
      }
      setLoading(false);
    })()
  }, [guesses])

  if (!apiKey) {
    function handleKeyChange(e) {
      setPendingApiKey(e.target.value);
    }
    function handleKeySubmit(e) {
      e.preventDefault();
      window.localStorage.setItem('apiKey', pendingApiKey);
      setApiKey(pendingApiKey);
    }
    return <form onSubmit={handleKeySubmit}>
      <label>
        OpenAI API Key:
        <input type="text" value={pendingApiKey} onChange={handleKeyChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>;
  }

  function handleGuessSubmit(e) {
    e.preventDefault();
    setGuesses([...(guesses ?? []), currentGuess]);
  }

  function handleGuessChange(e) {
    setCurrentGuess(e.target.value);
  }

  const clue = goal ?
    <img src={goal} />
    :
    <p>Generating...</p>;
  const input = loading ? <p>Wait</p> : <form onSubmit={handleGuessSubmit}>
    <label>
      Guess:
      <input type="text" onChange={handleGuessChange} />
    </label>
    <input type="submit" value="Submit" />
  </form>
  const responseImgs = responses.map(r =>
    <div>
      <p>You guessed {r.guess}.  <em>{r.correctWords.length} / {r.correctWords.length + r.wrongWords.length}</em> were correct.</p>
      <div style={{display: 'flex'}}>
        <div><p>Correct:</p><img src={r.correctImage}></img></div>
        <div><p>Wrong:</p><img src={r.wrongImage}></img></div>
      </div>
    </div>

    );
  return (
    <div className="App">
      {clue}
      { responseImgs }
      {input}
    </div >
  );

}

export default App;
