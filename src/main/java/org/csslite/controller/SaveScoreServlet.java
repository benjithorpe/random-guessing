package org.csslite.controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.csslite.dao.HighscoreDB;
import org.csslite.model.Player;

@WebServlet("/savescore")
public class SaveScoreServlet extends HttpServlet{

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");
        String name = request.getParameter("playerName");

        Player player = new Player();
        player.setName(name);
        player.setScore(0);
        HighscoreDB.addHighScore(player);
        response.getWriter().println("<h1>Score Has been saved!!!</h1>");
    }
}
