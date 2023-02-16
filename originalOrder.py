# will need some type of user input because the path to downloads folder will be different on everyone's computer, or can just adjust the script for each user at the very beginning and then it will always run 
import os
import shutil
# eventually can change this so at beginning of pipeline we take in genus and species and then use for all scripts
organism = input('Enter your organism in the following format: Genus species --> ')
genus = organism.split()[0].capitalize()
species = organism.split()[1]
# todo: eventually add validation
# os.rename('/Users/ritapecuch/Downloads/prokaryotes.csv', '/Users/ritapecuch/Downloads/Species_name.csv')
# shutil.move("path/to/current/file.foo", "path/to/new/destination/for/file.foo")