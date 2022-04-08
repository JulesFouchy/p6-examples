#include <p6/p6.h>
#include <functional>

enum class FramerateMode {
    Synced,
    AsFastAsPossible,
    Capped,
};

enum class TimeMode {
    Realtime,
    FixedTimesteps,
};

enum class Play {
    Play,
    Pause,
};

struct Ball {
    p6::Color color;
    float     y;
    float     x   = 0.f;
    float     dir = 1.f;

    void draw(p6::Context& ctx)
    {
        ctx.use_stroke = false;
        ctx.fill       = color;
        ctx.square(p6::Center{x, y}, p6::Radius{0.1f});
    }

    void update(std::function<float(float, float)> fun)
    {
        x = fun(x, dir);
        if (std::abs(x) > 0.95f) {
            dir *= -1.f;
            x = 0.94f * x / std::abs(x);
        }
    }

    void reset()
    {
        x   = 0.f;
        dir = 1.f;
    }
};

int main()
{
    auto  ctx                  = p6::Context{{1280, 720, "p6 Framerate"}};
    float framerate            = 80.f;
    float fixedsteps_framerate = 60.f;
    auto  framerate_mode       = FramerateMode::Synced;
    ctx.framerate_synced_with_monitor();
    auto time_mode = TimeMode::Realtime;
    ctx.set_time_mode_realtime();
    auto play_pause         = Play::Play;
    auto should_reset_balls = true;

    Ball ball_framerate_based{p6::NamedColor::Red, 0.f};
    Ball ball_dt_based{p6::NamedColor::GreenYellow, -0.2f};

    const auto reset_balls = [&]() {
        if (should_reset_balls) {
            ball_framerate_based.reset();
            ball_dt_based.reset();
        }
    };

    const auto choose_framerate_mode = [&]() {
        if (ImGui::RadioButton("framerate_synced_with_monitor()", (int*)&framerate_mode, (int)FramerateMode::Synced)) {
            ctx.framerate_synced_with_monitor();
            reset_balls();
        }
        if (ImGui::RadioButton("framerate_as_fast_as_possible()", (int*)&framerate_mode, (int)FramerateMode::AsFastAsPossible)) {
            ctx.framerate_as_fast_as_possible();
            reset_balls();
        }
        if (ImGui::RadioButton("framerate_capped_at()", (int*)&framerate_mode, (int)FramerateMode::Capped)) {
            ctx.framerate_capped_at(framerate);
            reset_balls();
        }
        ImGui::SameLine();
        ImGui::SetNextItemWidth(50.f);
        if (ImGui::SliderFloat("fps", &framerate, 0.001f, 150.f)) {
            ctx.framerate_capped_at(framerate);
            framerate_mode = FramerateMode::Capped;
            reset_balls();
        };
    };

    const auto choose_time_mode = [&]() {
        if (ImGui::RadioButton("time_realtime()", (int*)&time_mode, (int)TimeMode::Realtime)) {
            ctx.set_time_mode_realtime();
            reset_balls();
        }
        if (ImGui::RadioButton("time_fixedsteps()", (int*)&time_mode, (int)TimeMode::FixedTimesteps)) {
            ctx.set_time_mode_fixedstep(fixedsteps_framerate);
            reset_balls();
        }
        ImGui::SameLine();
        ImGui::SetNextItemWidth(50.f);
        if (ImGui::SliderFloat("fps", &fixedsteps_framerate, 0.001f, 150.f)) {
            ctx.set_time_mode_fixedstep(fixedsteps_framerate);
            time_mode = TimeMode::FixedTimesteps;
            reset_balls();
        };
    };

    const auto imgui_play_pause = [&]() {
        if (ImGui::RadioButton("play", (int*)&play_pause, (int)Play::Play)) {
            ctx.resume();
        }
        if (ImGui::RadioButton("pause", (int*)&play_pause, (int)Play::Pause)) {
            ctx.pause();
        }
    };

    ctx.imgui = [&]() {
        ImGui::Begin("Framerate");
        ImGui::Text("Time: %.1f s", ctx.time());
        ImGui::Text("Delta Time: %.1f ms", 1000.f * ctx.delta_time());
        ImGui::Text("Framerate: %.1f fps", 1.f / ctx.delta_time());
        ImGui::BeginGroup();
        choose_framerate_mode();
        ImGui::EndGroup();
        ImGui::SameLine();
        ImGui::BeginGroup();
        choose_time_mode();
        ImGui::EndGroup();
        ImGui::SameLine();
        ImGui::BeginGroup();
        imgui_play_pause();
        ImGui::EndGroup();
        ImGui::NewLine();
        ImGui::Checkbox("Reset Balls When Changing Mode", &should_reset_balls);
        ImGui::End();
    };

    ctx.update = [&]() {
        ctx.background(p6::NamedColor::DeepSkyBlue);
        ball_framerate_based.draw(ctx);
        ball_dt_based.draw(ctx);
        ball_framerate_based.update([](float x, float dir) {
            return x + 1.f / 60.f * dir;
        });
        ball_dt_based.update([&](float x, float dir) {
            return x + ctx.delta_time() * dir;
        });
    };
    ctx.start();
}