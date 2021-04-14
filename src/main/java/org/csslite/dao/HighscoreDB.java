package org.csslite.dao;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;
import org.csslite.model.Player;

public class HighscoreDB {

    private static final File scoreFile = new File("/scores.csv");
    private static Map<String, Integer> players = new HashMap<>(10);

    public static void getTopFiveHighScores() {
        sortPlayerScores();

        try (FileReader fileReader = new FileReader(scoreFile);
            BufferedReader bufferedReader = new BufferedReader(fileReader);) {

            String line;
            int count = 1;
            while ((line = bufferedReader.readLine()) != null) {
                String name = line.split(",")[0];
                int score = Integer.parseInt(line.split(",")[1]);

                players.put(name, score);
                System.out.println("Top5: " + name + " = " + score);
                if (count == 5) {
                    break;
                }
                count++;
            }
        } catch (IOException e) {
        }
    }

    private static void sortPlayerScores() {
        // read from the file
        try (FileReader fileReader = new FileReader(scoreFile);
            BufferedReader bufferedReader = new BufferedReader(fileReader);) {

            String line;
            while ((line = bufferedReader.readLine()) != null) {
                String name = line.split(",")[0];
                int score = Integer.parseInt(line.split(",")[1]);

                players.put(name, score);
                System.out.println("Read: " + name + " = " + score);
            }
        } catch (IOException e) {
        }

        // sort the map and write to the file again
        try (FileWriter fileWriter = new FileWriter(scoreFile);
            BufferedWriter bufferedWriter = new BufferedWriter(fileWriter);
            PrintWriter printWriter = new PrintWriter(bufferedWriter);) {

            players.entrySet()
                .stream()
                .sorted(Map.Entry.<String, Integer>comparingByValue().reversed())
                .forEach((player) -> printWriter.println(player.getKey() + "," + player.getValue()));
        } catch (IOException ioe) {
        }
    }

    public static void addHighScore(Player player) {
        try (FileWriter fileWriter = new FileWriter(scoreFile, true);
            BufferedWriter bufferedWriter = new BufferedWriter(fileWriter);
            PrintWriter printWriter = new PrintWriter(bufferedWriter);) {

            printWriter.println(player.getName() + "," + player.getScore());

        } catch (IOException e) {
        }
    }
}
