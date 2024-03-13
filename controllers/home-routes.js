const router = require('express').Router();


router.get('/', async (req, res) => {
  res.render('homepage');
});

//
router.get('/table', async (req, res) => {
  //
  return res.render('table');
});

//
router.get('/CharacterClass', async (req, res) => {
  //
  return res.render('CharacterClass');
});


//
router.get('/EscapeSequences', async (req, res) => {
  //
  return res.render('EscapeSequences');
});


//
// router.get('/Laziness', async (req, res) => {
//   //
//   return res.render('Laziness');
// });


//
router.get('/Metacharacters', async (req, res) => {
  //
  return res.render('Metacharacters');
});


//
router.get('/OccurrenceIndicators', async (req, res) => {
  //
  return res.render('OccurrenceIndicators');
});


// //
// router.get('/OROperator', async (req, res) => {
//   //
//   return res.render('OROperator');
// });


//
router.get('/ParenthesizedBackReferences', async (req, res) => {
  //
  return res.render('ParenthesizedBackReferences');
});


//
router.get('/Position', async (req, res) => {
  //
  return res.render('Position');
});


//
router.get('/RegexCharacters', async (req, res) => {
  //
  return res.render('RegexCharacters');
});


//
router.get('/SequenceOfCharacters', async (req, res) => {
  //
  return res.render('SequenceOfCharacters');
});


module.exports = router;


