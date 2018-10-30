# Final Presentation
Hi everyone, I'm ... of the group !Lonely Toons and the challenge we've chosen is "Make Sense out of Mars", that is to develop or reuse for
an innovative purpose a set of sensors to be used in human Mars Exploration.  
One aspect that we were struck by was the psychological tone of the crew along the whole mission. Even though NASA astronauts are thoroughly
trained in each and every aspect, psycho-attitudinal one included, we're still humans and fear, depression or loneliness could occur even
in most expert people, especially in innovative missions, pretty much far from Earth, about which few is known.  
This aspect is not new to NASA, infact in a [research](https://www.nasa.gov/mission_pages/station/research/experiments/991.html)
published on the 23rd of August 2018, the **Third Quarter Phenomenon** is described, according to which in the last quarter of the mission
the crew can experience negative emotions that could possibly lead to problems in the mission itself.  
Starting from this premise, we decided to design a system that is capable of detecting human emotions and to take an appropriate response
according to what is perceived. In order to do this, we thought of three possible solutions that can be integrated together in order to have a more accurate prediction:

   - **Face Mood Recognition**: by means of a video camera and a Convolutional Neural Network it's possible to analyze the face expression of the astronaut and, as a consequence, the mood.
   - **Sentiment Analysis**: by using a LTSM Neural Network is possible to detect the astronaut's morale by analyzing the tone of the voice and the content of the speech.
   - **Wearable Biomedical Sensors**: by using a [Biometric Smartshirt and a Biometric Patch developed by NASA](https://www.nasa.gov/mission_pages/station/research/experiments/2308.html), it's possible to measure biomedic parameters like ECG data, body temperature and levels of physical activity.

Once the system has detected the negative mood, its goal is to do something in order to cheer up the astronaut: in our case we implemented a very basic response, that is to print on the screen a joke, but obviously this can be improved.  
We thought of three possible ways to enhance our system:

   - **Reinforcement Learning**: the system can decide which is the best way to boost the morale depending on how effective were the previous responses.
   - **Customized Response**: the system can be trained specifically for the astronaut/s involved in the mission.
    Vocal Interaction: the AI reactions could be more human-like, for instance by talking with the astronaut in a natural way.

Our solution is versatile and it can not only be applied to Mars missions but in every mission in which people are forced for a long period of time in a hostile or lonely environment, far away from home and unable to come back to their families and friends.

Cermelli Fabio, Moro Lorenzo, Sabba Simone, Sartoni Sandro 
