import os
import shutil
# this will need to be adjusted for each user
downloadsPath = '/Users/ritapecuch/Downloads'
userDrivePath = '/Volumes/Pangenome'
fName = 'Rita'
lName = 'Pecuch'
# eventually can change this so at beginning of pipeline we take in genus and species and then use for all scripts
organism = input('Enter your organism in the following format: Genus species --> ')
# prevent empty search and check format
if not organism:
    print('Error: organism cannot be blank.')
elif len(organism.split(' ')) != 2:
    print('Error: enter the genus and species, separated by a space.')
else:
    genus = organism.split()[0].capitalize()
    species = organism.split()[1]
    print(f'{genus} {species}')
    # rename file
    os.rename(f'{downloadsPath}/prokaryotes.csv', f'{downloadsPath}/{genus}_{species}.csv')
    # move to network drive
    shutil.move(f'{downloadsPath}/{genus}_{species}.csv', f'{userDrivePath}/{fName}{lName}/{genus}_{species}/OriginalOrder')