# Addebeats

Soundboard and audio sequencer featuring Addepar-related soundbytes. Live @ http://www.billylittlefield.com/addebeats/

## Background

Built for Addepar's Summer 2016 Hackathon over the span of ~2.5 days. Features sound-clips from Addepar employees that can be played on a simple sound-board, or combined with bass & drum effects in an audio sequencer.

The sequencer enables you to play a selected audio clip on any subset of 16 "beats" that are played continuously in a loop. The clip is selected from a dropdown menu on the left-hand side, and each specific clip's volume can be adjusted on a per-layer basis. A global BPM slider controls the tempo (ie, the speed in which the beats are run through).

## Technology

Built using Ember.js and HTML5 Audio objects. Each track in the sequencer is represented by a "SoundMap", which contains a reference to the HTML5 audio object for the specific track and the set of beats for which the track should be played. A `setInterval` is used to identify which audio objects should be played on a given beat, and then play the audio clips using the audio object API.

This was a fun side-project to build that enabled me to play around with Ember on a "green field" after picking it up the last few months. I also enjoyed playing around with the HTML5 audio objects and putting together a cohesive product that feels pretty engaging to use. Perhaps the most useful takeaway, however, is learning how far a little `box-shadow` (inversed on `:active`) and `transition: background-color` goes to make a button feel really fun to press.
