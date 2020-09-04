let main = {
  ////Instaurar imagenes, posicion inicial y estados iniciales de las piezas. Ademas del tipo de pieza al bando que pertenecen. //
  variables: {
  turn: 'w',
  selectedpiece: '',
  highlighted: [],
  pieces: {

      w_king: {
      position: '5_1',
      img: '&#9812;',
      captured: false,
      moved: false,
      type: 'w_king'
      
      },
      w_queen: {
      position: '4_1',
      img: '&#9813;',
      captured: false,
      moved: false,
      type: 'w_queen'
      },
      w_bishop1: {
      position: '3_1',
      img: '&#9815;',
      captured: false,
      moved: false,
      type: 'w_bishop'
      },
      w_bishop2: {
      position: '6_1',
      img: '&#9815;',
      captured: false,
      moved: false,
      type: 'w_bishop'
      },
      w_knight1: {
      position: '2_1',
      img: '&#9816;',
      captured: false,
      moved: false,
      type: 'w_knight'
      },
      w_knight2: {
      position: '7_1',
      img: '&#9816;',
      captured: false,
      moved: false,
      type: 'w_knight'
      },
      w_rook1: {
      position: '1_1',
      img: '&#9814;',
      captured: false,
      moved: false,
      type: 'w_rook'
      },
      w_rook2: {
      position: '8_1',
      img: '&#9814;',
      captured: false,
      moved: false,
      type: 'w_rook'
      },
      w_pawn1: {
      position: '1_2',
      img: '&#9817;',
      captured: false,
      type: 'w_pawn',
      moved: false
      },
      w_pawn2: {
      position: '2_2',
      img: '&#9817;',
      captured: false,
      type: 'w_pawn',
      moved: false
      },
      w_pawn3: {
      position: '3_2',
      img: '&#9817;',
      captured: false,
      type: 'w_pawn',
      moved: false
      },
      w_pawn4: {
      position: '4_2',
      img: '&#9817;',
      captured: false,
      type: 'w_pawn',
      moved: false
      },
      w_pawn5: {
      position: '5_2',
      img: '&#9817;',
      captured: false,
      type: 'w_pawn',
      moved: false
      },
      w_pawn6: {
      position: '6_2',
      img: '&#9817;',
      captured: false,
      type: 'w_pawn',
      moved: false
      },
      w_pawn7: {
      position: '7_2',
      img: '&#9817;',
      captured: false,
      type: 'w_pawn',
      moved: false
      },
      w_pawn8: {
      position: '8_2',
      img: '&#9817;',
      captured: false,
      type: 'w_pawn',
      moved: false
      },
      // Inicio estandarizacion de las piezas negras. //
      b_king: {
      position: '5_8',
      img: '&#9818;',
      captured: false,
      moved: false,
      type: 'b_king'
      },
      b_queen: {
      position: '4_8',
      img: '&#9819;',
      captured: false,
      moved: false,
      type: 'b_queen'
      },
      b_bishop1: {
      position: '3_8',
      img: '&#9821;',
      captured: false,
      moved: false,
      type: 'b_bishop'
      },
      b_bishop2: {
      position: '6_8',
      img: '&#9821;',
      captured: false,
      moved: false,
      type: 'b_bishop'
      },
      b_knight1: {
      position: '2_8',
      img: '&#9822;',
      captured: false,
      moved: false,
      type: 'b_knight'
      },
      b_knight2: {
      position: '7_8',
      img: '&#9822;',
      captured: false,
      moved: false,
      type: 'b_knight'
      },
      b_rook1: {
      position: '1_8',
      img: '&#9820;',
      captured: false,
      moved: false,
      type: 'b_rook'
      },
      b_rook2: {
      position: '8_8',
      img: '&#9820;',
      captured: false,
      moved: false,
      type: 'b_rook'
      },
      b_pawn1: {
      position: '1_7',
      img: '&#9823;',
      captured: false,
      type: 'b_pawn',
      moved: false
      },
      b_pawn2: {
      position: '2_7',
      img: '&#9823;',
      captured: false,
      type: 'b_pawn',
      moved: false
      },
      b_pawn3: {
      position: '3_7',
      img: '&#9823;',
      captured: false,
      type: 'b_pawn',
      moved: false
      },
      b_pawn4: {
      position: '4_7',
      img: '&#9823;',
      captured: false,
      type: 'b_pawn',
      moved: false
      },
      b_pawn5: {
      position: '5_7',
      img: '&#9823;',
      captured: false,
      type: 'b_pawn',
      moved: false
      },
      b_pawn6: {
      position: '6_7',
      img: '&#9823;',
      captured: false,
      type: 'b_pawn',
      moved: false
      },
      b_pawn7: {
      position: '7_7',
      img: '&#9823;',
      captured: false,
      type: 'b_pawn',
      moved: false
      },
      b_pawn8: {
      position: '8_7',
      img: '&#9823;',
      captured: false,
      type: 'b_pawn',
      moved: false
      }

  }
  },

  methods: {
  gamesetup: function() {
      $('.gamecell').attr('chess', 'null');
      for (let gamepiece in main.variables.pieces) {
      $('#' + main.variables.pieces[gamepiece].position).html(main.variables.pieces[gamepiece].img);
      $('#' + main.variables.pieces[gamepiece].position).attr('chess', gamepiece);
      }
  },

  moveoptions: function(selectedpiece) {

      let position = { x: '', y: '' };
      position.x = main.variables.pieces[selectedpiece].position.split('_')[0];
      position.y = main.variables.pieces[selectedpiece].position.split('_')[1];

      // Estas opciones deben ser var en lugar de let. //
      var options = []; 
      var coordinates = [];
      var startpoint = main.variables.pieces[selectedpiece].position;
      var c1,c2,c3,c4,c5,c6,c7,c8;

      if (main.variables.highlighted.length != 0) {
      main.methods.togglehighlight(main.variables.highlighted);
      }

      switch (main.variables.pieces[selectedpiece].type) {
      case 'w_king': // Coordenas de movimientos para el rey blanco. //

          if ($('#6_1').attr('chess') == 'null' && $('#7_1').attr('chess') == 'null' && main.variables.pieces['w_king'].moved == false && main.variables.pieces['w_rook2'].moved == false) {
          coordinates = [{ x: 1, y: 1 },{ x: 1, y: 0 },{ x: 1, y: -1 },{ x: 0, y: -1 },{ x: -1, y: -1 },{ x: -1, y: 0 },{ x: -1, y: 1 },{ x: 0, y: 1 },{x: 2, y: 0}].map(function(val){
              return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
          });
          } else {
          coordinates = [{ x: 1, y: 1 },{ x: 1, y: 0 },{ x: 1, y: -1 },{ x: 0, y: -1 },{ x: -1, y: -1 },{ x: -1, y: 0 },{ x: -1, y: 1 },{ x: 0, y: 1 }].map(function(val){
              return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
          });
          }

          options = (main.methods.options(startpoint, coordinates, main.variables.pieces[selectedpiece].type)).slice(0);
          main.variables.highlighted = options.slice(0);
          main.methods.togglehighlight(options);

          break;
      case 'b_king': // Coordenas de movimientos para el rey negro. //

      if ($('#6_8').attr('chess') == 'null' && $('#7_8').attr('chess') == 'null' && main.variables.pieces['b_king'].moved == false && main.variables.pieces['b_rook2'].moved == false) {
          coordinates = [{ x: 1, y: 1 },{ x: 1, y: 0 },{ x: 1, y: -1 },{ x: 0, y: -1 },{ x: -1, y: -1 },{ x: -1, y: 0 },{ x: -1, y: 1 },{ x: 0, y: 1 },{x: 2, y: 0}].map(function(val){
          return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
          });
      } else {
          coordinates = [{ x: 1, y: 1 },{ x: 1, y: 0 },{ x: 1, y: -1 },{ x: 0, y: -1 },{ x: -1, y: -1 },{ x: -1, y: 0 },{ x: -1, y: 1 },{ x: 0, y: 1 }].map(function(val){
          return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
          });
      }
      
          options = (main.methods.options(startpoint, coordinates, main.variables.pieces[selectedpiece].type)).slice(0);
          main.variables.highlighted = options.slice(0);
          main.methods.togglehighlight(options);

          break;
      case 'w_queen': // Coordenadas de movimiento para la reina blanca. //

          c1 = main.methods.w_options(position,[{x: 1, y: 1},{x: 2, y: 2},{x: 3, y: 3},{x: 4, y: 4},{x: 5, y: 5},{x: 6, y: 6},{x: 7, y: 7}]);
          c2 = main.methods.w_options(position,[{x: 1, y: -1},{x: 2, y: -2},{x: 3, y: -3},{x: 4, y: -4},{x: 5, y: -5},{x: 6, y: -6},{x: 7, y: -7}]);
          c3 = main.methods.w_options(position,[{x: -1, y: 1},{x: -2, y: 2},{x: -3, y: 3},{x: -4, y: 4},{x: -5, y: 5},{x: -6, y: 6},{x: -7, y: 7}]);
          c4 = main.methods.w_options(position,[{x: -1, y: -1},{x: -2, y: -2},{x: -3, y: -3},{x: -4, y: -4},{x: -5, y: -5},{x: -6, y: -6},{x: -7, y: -7}]);
          c5 = main.methods.w_options(position,[{x: 1, y: 0},{x: 2, y: 0},{x: 3, y: 0},{x: 4, y: 0},{x: 5, y: 0},{x: 6, y: 0},{x: 7, y: 0}]);
          c6 = main.methods.w_options(position,[{x: 0, y: 1},{x: 0, y: 2},{x: 0, y: 3},{x: 0, y: 4},{x: 0, y: 5},{x: 0, y: 6},{x: 0, y: 7}]);
          c7 = main.methods.w_options(position,[{x: -1, y: 0},{x: -2, y: 0},{x: -3, y: 0},{x: -4, y: 0},{x: -5, y: 0},{x: -6, y: 0},{x: -7, y: 0}]);
          c8 = main.methods.w_options(position,[{x: 0, y: -1},{x: 0, y: -2},{x: 0, y: -3},{x: 0, y: -4},{x: 0, y: -5},{x: 0, y: -6},{x: 0, y: -7}]);

          coordinates = c1.concat(c2).concat(c3).concat(c4).concat(c5).concat(c6).concat(c7).concat(c8);
          
          options = coordinates.slice(0);
          main.variables.highlighted = options.slice(0);
          main.methods.togglehighlight(options);

          break;
      case 'b_queen': // Coordenadas de movimiento para la reina negra  //
          
          c1 = main.methods.b_options(position,[{x: 1, y: 1},{x: 2, y: 2},{x: 3, y: 3},{x: 4, y: 4},{x: 5, y: 5},{x: 6, y: 6},{x: 7, y: 7}]);
          c2 = main.methods.b_options(position,[{x: 1, y: -1},{x: 2, y: -2},{x: 3, y: -3},{x: 4, y: -4},{x: 5, y: -5},{x: 6, y: -6},{x: 7, y: -7}]);
          c3 = main.methods.b_options(position,[{x: -1, y: 1},{x: -2, y: 2},{x: -3, y: 3},{x: -4, y: 4},{x: -5, y: 5},{x: -6, y: 6},{x: -7, y: 7}]);
          c4 = main.methods.b_options(position,[{x: -1, y: -1},{x: -2, y: -2},{x: -3, y: -3},{x: -4, y: -4},{x: -5, y: -5},{x: -6, y: -6},{x: -7, y: -7}]);
          c5 = main.methods.b_options(position,[{x: 1, y: 0},{x: 2, y: 0},{x: 3, y: 0},{x: 4, y: 0},{x: 5, y: 0},{x: 6, y: 0},{x: 7, y: 0}]);
          c6 = main.methods.b_options(position,[{x: 0, y: 1},{x: 0, y: 2},{x: 0, y: 3},{x: 0, y: 4},{x: 0, y: 5},{x: 0, y: 6},{x: 0, y: 7}]);
          c7 = main.methods.b_options(position,[{x: -1, y: 0},{x: -2, y: 0},{x: -3, y: 0},{x: -4, y: 0},{x: -5, y: 0},{x: -6, y: 0},{x: -7, y: 0}]);
          c8 = main.methods.b_options(position,[{x: 0, y: -1},{x: 0, y: -2},{x: 0, y: -3},{x: 0, y: -4},{x: 0, y: -5},{x: 0, y: -6},{x: 0, y: -7}]);

          coordinates = c1.concat(c2).concat(c3).concat(c4).concat(c5).concat(c6).concat(c7).concat(c8);
          
          options = coordinates.slice(0);
          main.variables.highlighted = options.slice(0);
          main.methods.togglehighlight(options);

          break;
      
      case 'w_bishop': // Coordenadas de movimiento del alfil blanco. // 

          c1 = main.methods.w_options(position,[{x: 1, y: 1},{x: 2, y: 2},{x: 3, y: 3},{x: 4, y: 4},{x: 5, y: 5},{x: 6, y: 6},{x: 7, y: 7}]);
          c2 = main.methods.w_options(position,[{x: 1, y: -1},{x: 2, y: -2},{x: 3, y: -3},{x: 4, y: -4},{x: 5, y: -5},{x: 6, y: -6},{x: 7, y: -7}]);
          c3 = main.methods.w_options(position,[{x: -1, y: 1},{x: -2, y: 2},{x: -3, y: 3},{x: -4, y: 4},{x: -5, y: 5},{x: -6, y: 6},{x: -7, y: 7}]);
          c4 = main.methods.w_options(position,[{x: -1, y: -1},{x: -2, y: -2},{x: -3, y: -3},{x: -4, y: -4},{x: -5, y: -5},{x: -6, y: -6},{x: -7, y: -7}]);

          coordinates = c1.concat(c2).concat(c3).concat(c4);

          options = coordinates.slice(0);
          main.variables.highlighted = options.slice(0);
          main.methods.togglehighlight(options);

          break;
      
      case 'b_bishop': // Coordenadas de movimiento del alfin negro. //

          c1 = main.methods.b_options(position,[{x: 1, y: 1},{x: 2, y: 2},{x: 3, y: 3},{x: 4, y: 4},{x: 5, y: 5},{x: 6, y: 6},{x: 7, y: 7}]);
          c2 = main.methods.b_options(position,[{x: 1, y: -1},{x: 2, y: -2},{x: 3, y: -3},{x: 4, y: -4},{x: 5, y: -5},{x: 6, y: -6},{x: 7, y: -7}]);
          c3 = main.methods.b_options(position,[{x: -1, y: 1},{x: -2, y: 2},{x: -3, y: 3},{x: -4, y: 4},{x: -5, y: 5},{x: -6, y: 6},{x: -7, y: 7}]);
          c4 = main.methods.b_options(position,[{x: -1, y: -1},{x: -2, y: -2},{x: -3, y: -3},{x: -4, y: -4},{x: -5, y: -5},{x: -6, y: -6},{x: -7, y: -7}]);

          coordinates = c1.concat(c2).concat(c3).concat(c4);

          options = coordinates.slice(0);
          main.variables.highlighted = options.slice(0);
          main.methods.togglehighlight(options);
          break;

      case 'w_knight': // Coordenadas de movimiento del caballo blanco. //

          coordinates = [{ x: -1, y: 2 },{ x: 1, y: 2 },{ x: 1, y: -2 },{ x: -1, y: -2 },{ x: 2, y: 1 },{ x: 2, y: -1 },{ x: -2, y: -1 },{ x: -2, y: 1 }].map(function(val){
          return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
          });

          options = (main.methods.options(startpoint, coordinates, main.variables.pieces[selectedpiece].type)).slice(0);
          main.variables.highlighted = options.slice(0);
          main.methods.togglehighlight(options);

          break;
      case 'b_knight': // Coordenadas de moviento del caballo negro. //

          coordinates = [{ x: -1, y: 2 },{ x: 1, y: 2 },{ x: 1, y: -2 },{ x: -1, y: -2 },{ x: 2, y: 1 },{ x: 2, y: -1 },{ x: -2, y: -1 },{ x: -2, y: 1 }].map(function(val){
          return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
          });

          options = (main.methods.options(startpoint, coordinates, main.variables.pieces[selectedpiece].type)).slice(0);
          main.variables.highlighted = options.slice(0);
          main.methods.togglehighlight(options);

          break;
      case 'w_rook': // Coordenadas de movimiento de la torre blanca. // 

          c1 = main.methods.w_options(position,[{x: 1, y: 0},{x: 2, y: 0},{x: 3, y: 0},{x: 4, y: 0},{x: 5, y: 0},{x: 6, y: 0},{x: 7, y: 0}]);
          c2 = main.methods.w_options(position,[{x: 0, y: 1},{x: 0, y: 2},{x: 0, y: 3},{x: 0, y: 4},{x: 0, y: 5},{x: 0, y: 6},{x: 0, y: 7}]);
          c3 = main.methods.w_options(position,[{x: -1, y: 0},{x: -2, y: 0},{x: -3, y: 0},{x: -4, y: 0},{x: -5, y: 0},{x: -6, y: 0},{x: -7, y: 0}]);
          c4 = main.methods.w_options(position,[{x: 0, y: -1},{x: 0, y: -2},{x: 0, y: -3},{x: 0, y: -4},{x: 0, y: -5},{x: 0, y: -6},{x: 0, y: -7}]);

          coordinates = c1.concat(c2).concat(c3).concat(c4);

          options = coordinates.slice(0);
          main.variables.highlighted = options.slice(0);
          main.methods.togglehighlight(options);
          
          break;
      case 'b_rook': // Coordenadas de movimiento de la torre negra. //
      
          c1 = main.methods.b_options(position,[{x: 1, y: 0},{x: 2, y: 0},{x: 3, y: 0},{x: 4, y: 0},{x: 5, y: 0},{x: 6, y: 0},{x: 7, y: 0}]);
          c2 = main.methods.b_options(position,[{x: 0, y: 1},{x: 0, y: 2},{x: 0, y: 3},{x: 0, y: 4},{x: 0, y: 5},{x: 0, y: 6},{x: 0, y: 7}]);
          c3 = main.methods.b_options(position,[{x: -1, y: 0},{x: -2, y: 0},{x: -3, y: 0},{x: -4, y: 0},{x: -5, y: 0},{x: -6, y: 0},{x: -7, y: 0}]);
          c4 = main.methods.b_options(position,[{x: 0, y: -1},{x: 0, y: -2},{x: 0, y: -3},{x: 0, y: -4},{x: 0, y: -5},{x: 0, y: -6},{x: 0, y: -7}]);

          coordinates = c1.concat(c2).concat(c3).concat(c4);

          options = coordinates.slice(0);
          main.variables.highlighted = options.slice(0);
          main.methods.togglehighlight(options);
          
          break;
      case 'w_pawn': // Coordenadas de movimientos de los peones blancos. //

          if (main.variables.pieces[selectedpiece].moved == false) {

          coordinates = [{ x: 0, y: 1 },{ x: 0, y: 2 },{ x: 1, y: 1 },{ x: -1, y: 1 }].map(function(val){
              return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
          });

          }
          else if (main.variables.pieces[selectedpiece].moved == true) {

          coordinates = [{ x: 0, y: 1 },{ x: 1, y: 1 },{ x: -1, y: 1 }].map(function(val){
              return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
          });

          }

          options = (main.methods.options(startpoint, coordinates, main.variables.pieces[selectedpiece].type)).slice(0);
          main.variables.highlighted = options.slice(0);
          main.methods.togglehighlight(options);

          break;

      case 'b_pawn': // Coordenadas de movimientos de los peones negros. //

          if (main.variables.pieces[selectedpiece].moved == false) {

          coordinates = [{ x: 0, y: -1 },{ x: 0, y: -2 },{ x: 1, y: -1 },{ x: -1, y: -1 }].map(function(val){
              return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
          });

          }
          else if (main.variables.pieces[selectedpiece].moved == true) {

          coordinates = [{ x: 0, y: -1 },{ x: 1, y: -1 },{ x: -1, y: -1 }].map(function(val){
              return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
          });

          }

          options = (main.methods.options(startpoint, coordinates, main.variables.pieces[selectedpiece].type)).slice(0);
          main.variables.highlighted = options.slice(0);
          main.methods.togglehighlight(options);

          break;

      }
  },

  options: function(startpoint, coordinates, piecetype) { // Verificacion si alguna de las posibles coordenadas está fuera de los límites. //
      
      coordinates = coordinates.filter(val => {
      let pos = { x: 0, y: 0 };
      pos.x = parseInt(val.split('_')[0]);
      pos.y = parseInt(val.split('_')[1]);

      if (!(pos.x < 1) && !(pos.x > 8) && !(pos.y < 1) && !(pos.y > 8)) { // Si no es el caso, devuelve las coordenadas. //
          return val;
      }
      });

      switch (piecetype) {

      case 'w_king': // Case con las posibles varianzas de movimientos fuera de los limites permitidos. //

          coordinates = coordinates.filter(val => {
          return ($('#' + val).attr('chess') == 'null' || ($('#' + val).attr('chess')).slice(0,1) == 'b');
          });

          break;
      case 'b_king':
      
          coordinates = coordinates.filter(val => {
          return ($('#' + val).attr('chess') == 'null' || ($('#' + val).attr('chess')).slice(0,1) == 'w');
          });

          break;
      case 'w_knight':

          coordinates = coordinates.filter(val => {
          return ($('#' + val).attr('chess') == 'null' || ($('#' + val).attr('chess')).slice(0,1) == 'b');
          });

          break;

      case 'b_knight':

          coordinates = coordinates.filter(val => {
          return ($('#' + val).attr('chess') == 'null' || ($('#' + val).attr('chess')).slice(0,1) == 'w');
          });

          break;

      case 'w_pawn':

          coordinates = coordinates.filter(val => {
              let sp = { x: 0, y: 0 };
              let coordinate = val.split('_');

              sp.x = startpoint.split('_')[0];
              sp.y = startpoint.split('_')[1];
              
              if (coordinate[0] < sp.x || coordinate[0] > sp.x){ // Si la coordenada está a cualquier lado del centro, verifique si tiene una pieza del bando contrario. //
              return ($('#' + val).attr('chess') != 'null' && ($('#' + val).attr('chess')).slice(0,1) == 'b'); // Devolver coordenadas con piezas del oponente. //
              } else { // de lo contrario, si la coordenada está en el centro. //
              if (coordinate[1] == (parseInt(sp.y) + 2) && $('#' + sp.x + '_' + (parseInt(sp.y) + 1)).attr('chess') != 'null'){
                  // No haga nada si este es el primer movimiento de los peones y hay una pieza delante de la 2ª coordenada. //
              } else {
                  return ($('#' + val).attr('chess') == 'null'); // De lo contrario, devuelve la coordenada si no hay una pieza de ajedrez en ella. //
              }
              }
                          
          });
      
          break;

      case 'b_pawn':

          coordinates = coordinates.filter(val => {
          let sp = { x: 0, y: 0 };
          let coordinate = val.split('_');

          sp.x = startpoint.split('_')[0];
          sp.y = startpoint.split('_')[1];
          
          if (coordinate[0] < sp.x || coordinate[0] > sp.x){ 
              return ($('#' + val).attr('chess') != 'null' && ($('#' + val).attr('chess')).slice(0,1) == 'w'); 
          } else {
              if (coordinate[1] == (parseInt(sp.y) - 2) && $('#' + sp.x + '_' + (parseInt(sp.y) - 1)).attr('chess') != 'null'){
              } else {
              return ($('#' + val).attr('chess') == 'null');
              }
          }
          });

          break;
      }      

      return coordinates;
  },

  w_options: function (position,coordinates) {
      
      let flag = false;
      
      coordinates = coordinates.map(function(val){ // Convierte las coordenadas x y y de identificacion en las cuadriculas reales de pantalla. //
          return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
      }).filter(val => {
          let pos = { x: 0, y: 0 };
          pos.x = parseInt(val.split('_')[0]);
          pos.y = parseInt(val.split('_')[1]);

          if (!(pos.x < 1) && !(pos.x > 8) && !(pos.y < 1) && !(pos.y > 8)) { // Si no esta fuera de los limites devuelve las coordenadas. //
          return val;
          }
      }).filter(val => { // Algoritmo para determinar las opciones de movimiento en la línea de visión para alfil / torre / reina (blanco). //
          if (flag == false){
          if ($('#' + val).attr('chess') == 'null'){
              console.log(val)
              return val;
          } else if (($('#' + val).attr('chess')).slice(0,1) == 'b') {
              flag = true;
              console.log(val)
              return val;
          } else if (($('#' + val).attr('chess')).slice(0,1) == 'w') {
              console.log(val+'-3')
              flag = true;
          }
          }
      });

      return coordinates;
      
  },

  b_options: function (position,coordinates) {
      
      let flag = false;
      
      coordinates = coordinates.map(function(val){ // Convierte las coordenadas x y y de identificacion en las cuadriculas reales de pantalla. //
          return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
      }).filter(val => {
          let pos = { x: 0, y: 0 };
          pos.x = parseInt(val.split('_')[0]);
          pos.y = parseInt(val.split('_')[1]);

          if (!(pos.x < 1) && !(pos.x > 8) && !(pos.y < 1) && !(pos.y > 8)) { // Si no esta fuera de los limites devuelve las coordenadas. //
          return val;
          }
      }).filter(val => { // Algoritmo para determinar las opciones de movimiento en la línea de visión para alfil / torre / reina (negro). //
          if (flag == false){
          if ($('#' + val).attr('chess') == 'null'){
              return val;
          } else if (($('#' + val).attr('chess')).slice(0,1) == 'w') {
              flag = true;
              return val;
          } else if (($('#' + val).attr('chess')).slice(0,1) == 'b') {
              flag = true;
          }
          }
      });

      return coordinates;
      
  },

  capture: function (target) { // Algoritmo para la captura de las piezas y rellenar el espacio con la pieza del bando. //
      let selectedpiece = {
      name: $('#' + main.variables.selectedpiece).attr('chess'),
      id: main.variables.selectedpiece
      };

      
      // Celda nueva. //
      $('#' + target.id).html(main.variables.pieces[selectedpiece.name].img);
      $('#' + target.id).attr('chess',selectedpiece.name);
      // Celda vieja. //
      $('#' + selectedpiece.id).html('');
      $('#' + selectedpiece.id).attr('chess','null');
      // Pieza movida. ///
      main.variables.pieces[selectedpiece.name].position = target.id;
      main.variables.pieces[selectedpiece.name].moved = true;
      // Pieza capturada. //
      main.variables.pieces[target.name].captured = true; 
  },

  move: function (target) { // Algoritmo de movimiento para las piezas. //

      let selectedpiece = $('#' + main.variables.selectedpiece).attr('chess');

      // new cell
      $('#' + target.id).html(main.variables.pieces[selectedpiece].img);
      $('#' + target.id).attr('chess',selectedpiece);
      // old cell
      $('#' + main.variables.selectedpiece).html('');
      $('#' + main.variables.selectedpiece).attr('chess','null');
      main.variables.pieces[selectedpiece].position = target.id;
      main.variables.pieces[selectedpiece].moved = true;
  },

  endturn: function(){

      if (main.variables.turn == 'w') {
      main.variables.turn = 'b';
      
      // alternar resaltar coordenadas en tablero. //
      main.methods.togglehighlight(main.variables.highlighted);
      main.variables.highlighted.length = 0;
      // volver a configurar la pieza seleccionada en ''. //
      main.variables.selectedpiece = '';

      $('#turn').html("It's Blacks Turn");

      $('#turn').addClass('turnhighlight');
      window.setTimeout(function(){
          $('#turn').removeClass('turnhighlight');
      }, 1500);

      } else if (main.variables.turn = 'b'){
      main.variables.turn = 'w';

      // alternar resaltar coordenadas. //
      main.methods.togglehighlight(main.variables.highlighted);
      main.variables.highlighted.length = 0;
      // volver a configurar la pieza seleccionada en ''.//
      main.variables.selectedpiece = '';

      $('#turn').html("It's Whites Turn");

      $('#turn').addClass('turnhighlight');
      window.setTimeout(function(){
          $('#turn').removeClass('turnhighlight');
      }, 1500);

      }

  },

  togglehighlight: function(options) {
      options.forEach(function(element, index, array) {
      $('#' + element).toggleClass("green shake-little neongreen_txt");
      });
  },

  }
  };

  $(document).ready(function() {
  main.methods.gamesetup();

  $('.gamecell').click(function(e) {

  var selectedpiece = {
      name: '',
      id: main.variables.selectedpiece
  };

  if (main.variables.selectedpiece == ''){
      selectedpiece.name = $('#' + e.target.id).attr('chess');
  } else {
      selectedpiece.name = $('#' + main.variables.selectedpiece).attr('chess');
  }

  var target = {
      name: $(this).attr('chess'),
      id: e.target.id
  };

  if (main.variables.selectedpiece == '' && target.name.slice(0,1) == main.variables.turn) { // Mostrar opciones de movimiento. //

      main.variables.selectedpiece = e.target.id;
      main.methods.moveoptions($(this).attr('chess'));

  } else if (main.variables.selectedpiece !='' && target.name == 'null') { // Mover piezas seleccionadas. //

      if (selectedpiece.name == 'w_king' || selectedpiece.name == 'b_king'){
      
      let t0 = (selectedpiece.name = 'w_king');
      let t1 = (selectedpiece.name = 'b_king');
      let t2 = (main.variables.pieces[selectedpiece.name].moved == false);
      let t3 = (main.variables.pieces['b_rook2'].moved == false);
      let t4 = (main.variables.pieces['w_rook2'].moved == false);
      let t5 = (target.id == '7_8');
      let t6 = (target.id == '7_1');

      if (t0 && t2 && t4 &&t6){ // Enroque para el rey blanco. //

          let k_position = '5_1';
          let k_target = '7_1';
          let r_position = '8_1';
          let r_target = '6_1';

          main.variables.pieces['w_king'].position = '7_1';
          main.variables.pieces['w_king'].moved = true;
          $('#'+k_position).html('');
          $('#'+k_position).attr('chess','null');
          $('#'+k_target).html(main.variables.pieces['w_king'].img);
          $('#'+k_target).attr('chess','w_king');

          main.variables.pieces['w_rook2'].position = '6_1';
          main.variables.pieces['w_rook2'].moved = true;
          $('#'+r_position).html('');
          $('#'+r_position).attr('chess','null');
          $('#'+r_target).html(main.variables.pieces['w_rook2'].img);
          $('#'+r_target).attr('chess','w_rook2');

          main.methods.endturn();

      } else if (t1 && t2 && t3 && t5){ // Enroque para el rey negro. //

          let k_position = '5_8';
          let k_target = '7_8';
          let r_position = '8_8';
          let r_target = '6_8';

          // rey blanco
          main.variables.pieces['b_king'].position = '7_8';
          main.variables.pieces['b_king'].moved = true;
          $('#'+k_position).html('');
          $('#'+k_position).attr('chess','null');
          $('#'+k_target).html(main.variables.pieces['b_king'].img);
          $('#'+k_target).attr('chess','b_king');

          main.variables.pieces['b_rook2'].position = '6_8';
          main.variables.pieces['b_rook2'].moved = true;
          $('#'+r_position).html('');
          $('#'+r_position).attr('chess','null');
          $('#'+r_target).html(main.variables.pieces['b_rook2'].img);
          $('#'+r_target).attr('chess','b_rook2');

          main.methods.endturn();
          
      } else { // Movimiento piezas seleccionadas. //
          main.methods.move(target);
          main.methods.endturn();
      }

      } else { // Por si la seleccion de pieza no es ningun rey. //

      main.methods.move(target);
      main.methods.endturn();

      }
      
  } else if (main.variables.selectedpiece !='' && target.name != 'null' && target.id != selectedpiece.id && selectedpiece.name.slice(0,1) != target.name.slice(0,1)){ // Captura de pieza. //
      
      if (selectedpiece.id != target.id && main.variables.highlighted.indexOf(target.id) != (-1)) { // Si no está tratando de capturar piezas que no están en su rango de movimiento. //
      
      // Captura. //
      main.methods.capture(target)
      main.methods.endturn();
      
      }

  } else if (main.variables.selectedpiece !='' && target.name != 'null' && target.id != selectedpiece.id && selectedpiece.name.slice(0,1) == target.name.slice(0,1)){ 
      //alternar opciones de movimiento. //
      main.methods.togglehighlight(main.variables.highlighted);
      main.variables.highlighted.length = 0;

      main.variables.selectedpiece = target.id;
      main.methods.moveoptions(target.name);

  }

  });

  $('body').contextmenu(function(e) {
  e.preventDefault();
  });

  });