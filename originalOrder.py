# will need some type of user input because the path to downloads folder will be different on everyone's computer, or can just adjust the script for each user at the very beginning and then it will always run 
import os
import shutil
# this will need to be adjusted for each user
downloadsPath = '/Users/ritapecuch/Downloads'
userDrivePath = '/Volumes/Pangenome'
fName = 'Rita'
lName = 'Pecuch'
# eventually can change this so at beginning of pipeline we take in genus and species and then use for all scripts
organism = input('Enter your organism in the following format: Genus species --> ')
genus = organism.split()[0].capitalize()
species = organism.split()[1]
# todo: eventually add validation
# todo: connect to network drive to test this
os.rename(f'{downloadsPath}/prokaryotes.csv', f'{downloadsPath}/{genus}_{species}.csv')
shutil.move(f'{downloadsPath}/{genus}_{species}.csv', f'{userDrivePath}/{fName}{lName}/{genus}_{species}/OriginalOrder')